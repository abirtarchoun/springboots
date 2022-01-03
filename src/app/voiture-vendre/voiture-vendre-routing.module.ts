import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureVendreComponent } from './voiture-vendre.component';
import { VoitureVendreDetailsComponent } from './voiture-vendre-details/voiture-vendre-details.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: VoitureVendreComponent },
  { path: ':id', component: VoitureVendreDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  exports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VoitureVendreRoutingModule { }
