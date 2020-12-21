import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaillocationsPage } from './detaillocations.page';

const routes: Routes = [
  {
    path: '',
    component: DetaillocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaillocationsPageRoutingModule {}
