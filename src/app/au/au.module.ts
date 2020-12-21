import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuPageRoutingModule } from './au-routing.module';

import { AuPage } from './au.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuPageRoutingModule
  ],
  declarations: [AuPage]
})
export class AuPageModule {}
