import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BookingsSelectExtrasPageRoutingModule } from './bookings-select-extras-routing.module';

import { BookingsSelectExtrasPage } from './bookings-select-extras.page';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule,MAT_DATE_LOCALE} from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsSelectExtrasPageRoutingModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatMomentDateModule,MatInputModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  declarations: [BookingsSelectExtrasPage]
})
export class BookingsSelectExtrasPageModule {}
