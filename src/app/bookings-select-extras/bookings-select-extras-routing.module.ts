import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsSelectExtrasPage } from './bookings-select-extras.page';

const routes: Routes = [
  {
    path: '',
    component: BookingsSelectExtrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsSelectExtrasPageRoutingModule {}
