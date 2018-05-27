import { Component } from '@angular/core';
import { ApiControllerService } from '../api';
import { DateFormatterService } from '../date-formatter.service';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spa-add',
  templateUrl: './spa-add.component.html',
  styleUrls: ['./spa-add.component.css']
})
export class SpaAddComponent {
  inputEmail: string;
  hrs = Array.from(Array(24), (_, i) => i);
  mms = Array.from(Array(60), (_, i) => i);
  startDate: Date;
  startHour: number;
  startMinute: number;
  endDate: Date;
  endHour: number;
  endMinute: number;
  isLoadingResults = false;

  constructor(
    private api: ApiControllerService,
    private dateFormatter: DateFormatterService,
    private snackBar: MatSnackBar
  ) { }

  submit() {
    const start = this.dateFormatter.formatDate(this.startDate, this.startHour, this.startMinute);
    const end = this.dateFormatter.formatDate(this.endDate, this.endHour, this.endMinute);
    this.isLoadingResults = true;
    this.api.add({ email: this.inputEmail, start, end })
      .subscribe(data => {
        this.isLoadingResults = false;
        this.snackBar.open(`Tracking for ${data.email} has been added`, 'OK', { duration: 5000 });
      });
  }
}
