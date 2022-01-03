import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvAdminRoutingModule } from './rdv-admin-routing.module';
import { RdvAdminComponent } from './rdv-admin.component';


@NgModule({
  declarations: [
    RdvAdminComponent
  ],
  imports: [
    CommonModule,
    RdvAdminRoutingModule
  ]
})
export class RdvAdminModule { }
