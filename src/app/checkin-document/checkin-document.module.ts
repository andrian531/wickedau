import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinDocumentPageRoutingModule } from './checkin-document-routing.module';

import { CheckinDocumentPage } from './checkin-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinDocumentPageRoutingModule
  ],
  declarations: [CheckinDocumentPage]
})
export class CheckinDocumentPageModule {}
