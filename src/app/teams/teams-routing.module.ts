import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsDetailsComponent } from './teams-details/teams-details.component';
import { MaterialModule } from '../material/material.module';






const routes: Routes = [
  { path: '', component: TeamsComponent },
 
  { path: ':id', component: TeamsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
     MaterialModule,
 
],
  exports: 
  [
    RouterModule,
    MaterialModule
  ],
  declarations: [
    TeamsDetailsComponent
  ]
})

export class TeamsRoutingModule { }
