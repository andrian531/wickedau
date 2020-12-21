import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailpromoPageRoutingModule } from './detailpromo-routing.module';

import { DetailpromoPage } from './detailpromo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailpromoPageRoutingModule
  ],
  declarations: [DetailpromoPage]
})
export class DetailpromoPageModule {}
