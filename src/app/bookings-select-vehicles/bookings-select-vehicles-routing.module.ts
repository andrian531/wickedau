import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsSelectVehiclesPage } from './bookings-select-vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: BookingsSelectVehiclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsSelectVehiclesPageRoutingModule {}
