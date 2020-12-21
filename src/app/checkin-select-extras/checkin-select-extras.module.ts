import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinSelectExtrasPageRoutingModule } from './checkin-select-extras-routing.module';

import { CheckinSelectExtrasPage } from './checkin-select-extras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinSelectExtrasPageRoutingModule
  ],
  declarations: [CheckinSelectExtrasPage]
})
export class CheckinSelectExtrasPageModule {}
