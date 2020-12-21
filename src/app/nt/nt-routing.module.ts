import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NtPage } from './nt.page';

const routes: Routes = [
  {
    path: '',
    component: NtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NtPageRoutingModule {}
