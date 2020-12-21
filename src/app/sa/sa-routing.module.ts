import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaPage } from './sa.page';

const routes: Routes = [
  {
    path: '',
    component: SaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaPageRoutingModule {}
