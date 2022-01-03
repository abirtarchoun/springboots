import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsRentComponent } from './cars-rent.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CarsRentComponent },
  { path: ':id', component: CarDetailsComponent }
];
@NgModule({

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule],
  exports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CarDetailsComponent
  ]
})
export class CarsRentRoutingModule { }
