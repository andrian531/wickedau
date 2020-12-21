import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasPageRoutingModule } from './tas-routing.module';

import { TasPage } from './tas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasPageRoutingModule
  ],
  declarations: [TasPage]
})
export class TasPageModule {}
