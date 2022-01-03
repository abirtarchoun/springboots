import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreetmapRoutingModule } from './streetmap-routing.module';
import { StreetmapComponent } from './streetmap.component';


@NgModule({
  declarations: [
    StreetmapComponent
  ],
  imports: [
    CommonModule,
    StreetmapRoutingModule
  ]
})
export class StreetmapModule { }
