import { Injectable } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  constructor(
    private numberPipe: DecimalPipe,
    private datePipe: DatePipe
  ) { }

  formatDate(date: Date, hour: number, minute: number) {
    return this.datePipe.transform(date, 'dd.MM.yyyy') + ' '
      + this.numberPipe.transform(hour, '2.0-0') + ':'
      + this.numberPipe.transform(minute, '2.0-0');
  }
}
