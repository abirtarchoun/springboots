import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [{ path: '', component: FeedbackComponent },

{ path: ':id', component: FeedbackDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),MaterialModule],
  exports: [RouterModule,
    MaterialModule], 
  declarations: [
    FeedbackDetailsComponent
  ]
})
export class FeedbackRoutingModule { }
