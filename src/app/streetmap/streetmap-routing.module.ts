import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreetmapComponent } from './streetmap.component';

const routes: Routes = [{ path: '', component: StreetmapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreetmapRoutingModule { }
