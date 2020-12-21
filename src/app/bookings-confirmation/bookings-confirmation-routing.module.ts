import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsConfirmationPage } from './bookings-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: BookingsConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsConfirmationPageRoutingModule {}
