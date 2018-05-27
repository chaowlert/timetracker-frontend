import { TestBed, inject } from '@angular/core/testing';

import { DateFormatterService } from './date-formatter.service';
import { DecimalPipe, DatePipe } from '@angular/common';

describe('DateFormatterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DecimalPipe,
        DatePipe,
        DateFormatterService
      ]
    });
  });

  it('should format date', inject([DateFormatterService], (service: DateFormatterService) => {
    const date = new Date(2018, 1, 2);
    const result = service.formatDate(date, 3, 4);
    expect(result).toEqual('02.02.2018 03:04');
  }));
});
