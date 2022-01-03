import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { RdvAdminComponent } from './rdv-admin.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const routes: Routes = [{ path: '', component: RdvAdminComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [
    RouterModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule
  ]
})
export class RdvAdminRoutingModule { }
