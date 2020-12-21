import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinDriverPageRoutingModule } from './checkin-driver-routing.module';

import { CheckinDriverPage } from './checkin-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinDriverPageRoutingModule
  ],
  declarations: [CheckinDriverPage]
})
export class CheckinDriverPageModule {}
