import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';

const routes: Routes = [{ path: '', component: BlogsComponent },
{ path: ':id', component: BlogsDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    BlogsDetailsComponent
  ]
})
export class BlogsRoutingModule { }
