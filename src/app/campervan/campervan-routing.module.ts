import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampervanPage } from './campervan.page';

const routes: Routes = [
  {
    path: '',
    component: CampervanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampervanPageRoutingModule {}
