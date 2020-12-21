import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarhirePageRoutingModule } from './carhire-routing.module';

import { CarhirePage } from './carhire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarhirePageRoutingModule
  ],
  declarations: [CarhirePage]
})
export class CarhirePageModule {}
