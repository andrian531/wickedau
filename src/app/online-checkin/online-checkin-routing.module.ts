import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineCheckinPage } from './online-checkin.page';

const routes: Routes = [
  {
    path: '',
    component: OnlineCheckinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineCheckinPageRoutingModule {}
