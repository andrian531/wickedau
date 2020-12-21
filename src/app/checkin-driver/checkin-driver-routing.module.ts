import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinDriverPage } from './checkin-driver.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinDriverPageRoutingModule {}
