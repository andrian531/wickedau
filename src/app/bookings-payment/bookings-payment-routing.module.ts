import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsPaymentPage } from './bookings-payment.page';

const routes: Routes = [
  {
    path: '',
    component: BookingsPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsPaymentPageRoutingModule {}
