import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';
import { FavoritesRentComponent } from './favorites-rent/favorites-rent.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  
  { path: '', component: FavoritesComponent },
  { path: 'favorites-rent', component: FavoritesRentComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule, MaterialModule],
  exports: [RouterModule],
  declarations: [
    FavoritesRentComponent
  ]
})
export class FavoritesRoutingModule { }
