import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentAddRoutingModule } from './rent-add-routing.module';
import { RentAddComponent } from './rent-add.component';


@NgModule({
  declarations: [
    RentAddComponent
  ],
  imports: [
    CommonModule,
    RentAddRoutingModule
  ]
})
export class RentAddModule { }
