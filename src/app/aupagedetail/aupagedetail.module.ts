import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AupagedetailPageRoutingModule } from './aupagedetail-routing.module';

import { AupagedetailPage } from './aupagedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AupagedetailPageRoutingModule
  ],
  declarations: [AupagedetailPage]
})
export class AupagedetailPageModule {}
