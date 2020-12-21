import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NtPageRoutingModule } from './nt-routing.module';

import { NtPage } from './nt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NtPageRoutingModule
  ],
  declarations: [NtPage]
})
export class NtPageModule {}
