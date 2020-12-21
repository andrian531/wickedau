import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VicPage } from './vic.page';

const routes: Routes = [
  {
    path: '',
    component: VicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VicPageRoutingModule {}
