import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaPage } from './wa.page';

const routes: Routes = [
  {
    path: '',
    component: WaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaPageRoutingModule {}
