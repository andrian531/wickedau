import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BookingsSelectVehiclesPageRoutingModule } from './bookings-select-vehicles-routing.module';

import { BookingsSelectVehiclesPage } from './bookings-select-vehicles.page';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule,MAT_DATE_LOCALE} from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatInputModule} from '@angular/material/input';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    BookingsSelectVehiclesPageRoutingModule,
    MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatMomentDateModule,MatInputModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  declarations: [BookingsSelectVehiclesPage]
})
export class BookingsSelectVehiclesPageModule {}
