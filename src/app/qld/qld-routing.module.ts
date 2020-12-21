import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QldPage } from './qld.page';

const routes: Routes = [
  {
    path: '',
    component: QldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QldPageRoutingModule {}
