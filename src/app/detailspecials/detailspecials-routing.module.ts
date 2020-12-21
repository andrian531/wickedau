import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailspecialsPage } from './detailspecials.page';

const routes: Routes = [
  {
    path: '',
    component: DetailspecialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailspecialsPageRoutingModule {}
