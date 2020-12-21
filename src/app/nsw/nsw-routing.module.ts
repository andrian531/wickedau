import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NswPage } from './nsw.page';

const routes: Routes = [
  {
    path: '',
    component: NswPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NswPageRoutingModule {}
