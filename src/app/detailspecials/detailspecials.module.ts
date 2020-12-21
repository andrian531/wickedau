import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailspecialsPageRoutingModule } from './detailspecials-routing.module';

import { DetailspecialsPage } from './detailspecials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailspecialsPageRoutingModule
  ],
  declarations: [DetailspecialsPage]
})
export class DetailspecialsPageModule {}
