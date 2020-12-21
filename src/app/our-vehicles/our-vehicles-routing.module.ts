import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurVehiclesPage } from './our-vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: OurVehiclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurVehiclesPageRoutingModule {}
