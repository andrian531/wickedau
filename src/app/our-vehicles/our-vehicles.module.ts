import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurVehiclesPageRoutingModule } from './our-vehicles-routing.module';

import { OurVehiclesPage } from './our-vehicles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurVehiclesPageRoutingModule
  ],
  declarations: [OurVehiclesPage]
})
export class OurVehiclesPageModule {}
