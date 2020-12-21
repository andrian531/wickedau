import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IframeBookingPage } from './iframe-booking.page';

const routes: Routes = [
  {
    path: '',
    component: IframeBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IframeBookingPageRoutingModule {}
