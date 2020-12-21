import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsConfirmationPageRoutingModule } from './bookings-confirmation-routing.module';

import { BookingsConfirmationPage } from './bookings-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsConfirmationPageRoutingModule
  ],
  declarations: [BookingsConfirmationPage]
})
export class BookingsConfirmationPageModule {}
