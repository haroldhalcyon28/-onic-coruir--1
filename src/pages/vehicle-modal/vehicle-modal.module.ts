import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleModalPage } from './vehicle-modal';

@NgModule({
  declarations: [
    VehicleModalPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleModalPage),
  ],
})
export class VehicleModalPageModule {}
