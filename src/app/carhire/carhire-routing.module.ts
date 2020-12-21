import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarhirePage } from './carhire.page';

const routes: Routes = [
  {
    path: '',
    component: CarhirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarhirePageRoutingModule {}
