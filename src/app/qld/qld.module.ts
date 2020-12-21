import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QldPageRoutingModule } from './qld-routing.module';

import { QldPage } from './qld.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QldPageRoutingModule
  ],
  declarations: [QldPage]
})
export class QldPageModule {}
