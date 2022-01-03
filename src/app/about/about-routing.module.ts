import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutDetailsComponent } from './about-details/about-details.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: ':id', component: AboutDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MaterialModule],
 
  exports: [RouterModule,  MaterialModule],
  declarations: [
    AboutDetailsComponent

   
  ]
})
export class AboutRoutingModule { }
