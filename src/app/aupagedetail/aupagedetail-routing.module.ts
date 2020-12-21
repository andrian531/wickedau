import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AupagedetailPage } from './aupagedetail.page';

const routes: Routes = [
  {
    path: '',
    component: AupagedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AupagedetailPageRoutingModule {}
