import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaPageRoutingModule } from './sa-routing.module';

import { SaPage } from './sa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaPageRoutingModule
  ],
  declarations: [SaPage]
})
export class SaPageModule {}
