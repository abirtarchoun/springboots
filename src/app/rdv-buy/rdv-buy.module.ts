import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvBuyRoutingModule } from './rdv-buy-routing.module';
import { RdvBuyComponent } from './rdv-buy.component';


@NgModule({
  declarations: [
    RdvBuyComponent
  ],
  imports: [
    CommonModule,
    RdvBuyRoutingModule
  ]
})
export class RdvBuyModule { }
