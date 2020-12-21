import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineCheckinPageRoutingModule } from './online-checkin-routing.module';

import { OnlineCheckinPage } from './online-checkin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineCheckinPageRoutingModule
  ],
  declarations: [OnlineCheckinPage]
})
export class OnlineCheckinPageModule {}
