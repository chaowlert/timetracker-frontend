import { Component, AfterViewInit } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { DateFormatterService } from './date-formatter.service';

@Component({
  selector: 'app-root',
  template: (window as any).mainTemplate + '', // (window as any).mainTemplate,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  hrs = Array.from(Array(24), (_, i) => i);
  mms = Array.from(Array(60), (_, i) => i);
  startDate: Date;
  startHour: number;
  startMinute: number;
  endDate: Date;
  endHour: number;
  endMinute: number;

  constructor(
    private dateFormatter: DateFormatterService,
    private snackBar: MatSnackBar
  ) { }

  ngAfterViewInit() {
    const added = this.getInput('added');
    if (added && added.value) {
      this.snackBar.open(`Tracking for ${added.value} has been added`, 'OK', { duration: 5000 });
    }
  }

  submit($event: Event) {
    const form = $event.currentTarget as HTMLFormElement;
    form.submit();
  }

  getInput(id: string) {
    return document.getElementById(id) as HTMLInputElement;
  }

  navPage(i: number) {
    const input = this.getInput('page');
    input.value = (+input.value + i) + '';
  }

  addRecord() {
    const start = this.getInput('start');
    start.value = this.dateFormatter.formatDate(this.startDate, this.startHour, this.startMinute);

    const end = this.getInput('end');
    end.value = this.dateFormatter.formatDate(this.endDate, this.endHour, this.endMinute);
  }
}
