import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinPaymentPage } from './checkin-payment.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinPaymentPageRoutingModule {}
