import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampervanPageRoutingModule } from './campervan-routing.module';

import { CampervanPage } from './campervan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampervanPageRoutingModule
  ],
  declarations: [CampervanPage]
})
export class CampervanPageModule {}
