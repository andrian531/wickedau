import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxNsj3SBzjbTP-DDgWrptj95rzZcEQz7M'
    })
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
