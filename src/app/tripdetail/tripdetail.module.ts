import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { IonicModule } from '@ionic/angular';

import { TripdetailPageRoutingModule } from './tripdetail-routing.module';

import { TripdetailPage } from './tripdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,

    TripdetailPageRoutingModule
  ],
  declarations: [TripdetailPage]
})
export class TripdetailPageModule {}
