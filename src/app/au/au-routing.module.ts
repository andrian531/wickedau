import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuPage } from './au.page';

const routes: Routes = [
  {
    path: '',
    component: AuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuPageRoutingModule {}
