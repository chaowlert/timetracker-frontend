import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecimalPipe, DatePipe } from '@angular/common';
import { ApiModule, BASE_PATH } from './api';
import { SpaComponent } from './spa/spa.component';
import { SpaSearchComponent } from './spa-search/spa-search.component';
import { SpaAddComponent } from './spa-add/spa-add.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SpaComponent,
    SpaSearchComponent,
    SpaAddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ApiModule,
  ],
  providers: [
    DecimalPipe,
    DatePipe,
    { provide: BASE_PATH, useValue: environment.apiPath }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
