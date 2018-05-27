import { Component, OnInit, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';
import { startWith, switchMap, filter } from 'rxjs/operators';
import { merge, Subject } from 'rxjs';
import { TrackingRecord, ApiControllerService } from '../api';

@Component({
  selector: 'app-spa-search',
  templateUrl: './spa-search.component.html',
  styleUrls: ['./spa-search.component.css']
})
export class SpaSearchComponent implements AfterViewInit {
  displayedColumns = ['email', 'start', 'end'];
  email: string;
  searchEmail: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isLoadingResults = false;
  dataSource: TrackingRecord[] = [];
  resultLength = 0;

  private searchEvent = new Subject<void>();

  constructor(
    private api: ApiControllerService
  ) { }

  ngAfterViewInit() {
    merge<void>(this.paginator.page, this.searchEvent)
      .pipe(
        switchMap(() => {
          this.isLoadingResults = true;
          return this.api.browse(this.searchEmail, this.paginator.pageIndex * this.paginator.pageSize, this.paginator.pageSize + 1);
        })
      )
      .subscribe(data => {
        this.isLoadingResults = false;

        const len = this.paginator.pageIndex * this.paginator.pageSize + data.length;
        if (data.length === this.paginator.pageSize + 1) {
          data.splice(this.paginator.pageSize, 1);
        }
        this.resultLength = len;
        this.dataSource = data;
      });
  }

  submit() {
    this.searchEmail = this.email;
    this.paginator.pageIndex = 0;
    this.searchEvent.next();
  }
}
