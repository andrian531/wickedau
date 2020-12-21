import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsPaymentPageRoutingModule } from './bookings-payment-routing.module';

import { BookingsPaymentPage } from './bookings-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsPaymentPageRoutingModule
  ],
  declarations: [BookingsPaymentPage]
})
export class BookingsPaymentPageModule {}
