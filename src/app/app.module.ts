import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { TeamsAdminComponent } from './teams-admin/teams-admin.component';
import { TeamAddComponent } from './teams-admin/team-add/team-add.component';
import { TeamListComponent } from './teams-admin/team-list/team-list.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AgencysAdminComponent } from './agencys-admin/agencys-admin.component';
import { AgencyAddComponent } from './agencys-admin/agency-add/agency-add.component';
import { AgencyListComponent } from './agencys-admin/agency-list/agency-list.component';
import { DatePipe } from '@angular/common';
import { AuthInterceptor } from "./auth.interceptor";
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    ContactComponent,
    MatConfirmDialogComponent,
    TeamsAdminComponent,
    TeamAddComponent,
    TeamListComponent,
    AgencysAdminComponent,
    AgencyAddComponent,
    AgencyListComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: MatDialogRef, useValue: {close: (_dialogResult: any) => { }} },
    DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [TeamAddComponent]
})
export class AppModule { }
