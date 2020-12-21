import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailpromoPage } from './detailpromo.page';

const routes: Routes = [
  {
    path: '',
    component: DetailpromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailpromoPageRoutingModule {}
