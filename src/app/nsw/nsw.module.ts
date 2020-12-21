import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NswPageRoutingModule } from './nsw-routing.module';

import { NswPage } from './nsw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NswPageRoutingModule
  ],
  declarations: [NswPage]
})
export class NswPageModule {}
