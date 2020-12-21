import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasPage } from './tas.page';

const routes: Routes = [
  {
    path: '',
    component: TasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasPageRoutingModule {}
