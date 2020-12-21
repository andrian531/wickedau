import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinPaymentPageRoutingModule } from './checkin-payment-routing.module';

import { CheckinPaymentPage } from './checkin-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinPaymentPageRoutingModule
  ],
  declarations: [CheckinPaymentPage]
})
export class CheckinPaymentPageModule {}
