import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRentRoutingModule } from './cars-rent-routing.module';
import { CarsRentComponent } from './cars-rent.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CarsRentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarsRentRoutingModule
  ]
})
export class CarsRentModule { }
