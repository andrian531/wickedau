import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaPageRoutingModule } from './wa-routing.module';

import { WaPage } from './wa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaPageRoutingModule
  ],
  declarations: [WaPage]
})
export class WaPageModule {}
