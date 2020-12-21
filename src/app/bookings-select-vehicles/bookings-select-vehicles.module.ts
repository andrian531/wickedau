import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsSelectVehiclesPageRoutingModule } from './bookings-select-vehicles-routing.module';

import { BookingsSelectVehiclesPage } from './bookings-select-vehicles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsSelectVehiclesPageRoutingModule
  ],
  declarations: [BookingsSelectVehiclesPage]
})
export class BookingsSelectVehiclesPageModule {}
