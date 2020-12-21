import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwdPage } from './awd.page';

const routes: Routes = [
  {
    path: '',
    component: AwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwdPageRoutingModule {}
