import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinDocumentPage } from './checkin-document.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinDocumentPageRoutingModule {}
