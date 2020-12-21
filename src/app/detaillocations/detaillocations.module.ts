import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';

import { DetaillocationsPageRoutingModule } from './detaillocations-routing.module';

import { DetaillocationsPage } from './detaillocations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaillocationsPageRoutingModule,
   /* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxNsj3SBzjbTP-DDgWrptj95rzZcEQz7M'
    })*/
  ],
  declarations: [DetaillocationsPage]
})
export class DetaillocationsPageModule {}
