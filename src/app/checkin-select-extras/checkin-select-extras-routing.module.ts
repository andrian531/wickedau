import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinSelectExtrasPage } from './checkin-select-extras.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinSelectExtrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinSelectExtrasPageRoutingModule {}
