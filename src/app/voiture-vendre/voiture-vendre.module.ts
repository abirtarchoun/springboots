import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoitureVendreRoutingModule } from './voiture-vendre-routing.module';
import { VoitureVendreComponent } from './voiture-vendre.component';
import { VoitureVendreDetailsComponent } from './voiture-vendre-details/voiture-vendre-details.component';



@NgModule({
  declarations: [
    VoitureVendreComponent,
    VoitureVendreDetailsComponent
  ],
  imports: [
    CommonModule,
    VoitureVendreRoutingModule,
  
  ]
})
export class VoitureVendreModule { }
