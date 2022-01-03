import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/shared/notification.service';
import { TeamAdminService } from 'src/app/shared/teamAdmin.service';
import { Teams } from 'src/app/teams/teams.model';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})
export class TeamAddComponent implements OnInit {

  team !: Teams[];
  datasource = new MatTableDataSource(this.team);
  constructor( public teamAdminservice : TeamAdminService, private notificationteamAdminservice : NotificationService,public dialogRef: MatDialogRef<TeamAddComponent>) { }

  ngOnInit(): void {
  }

  getAll() {
    this.teamAdminservice.get().subscribe((response: any) => {
      this.datasource.data = response;
    });

  }
  
  onClear() {
    this.teamAdminservice.form.reset();
    this.teamAdminservice.initializeFormGroup();
  }

  onSubmit() {
    if (this.teamAdminservice.form.valid) {
      if ( ! this.teamAdminservice.form.get('id')?.value)
        this.teamAdminservice.create(this.teamAdminservice.form.value).subscribe(() => {
          this.getAll();
        })
      else
      this.teamAdminservice.update(this.teamAdminservice.form.value).subscribe(() => {
        this.getAll();
      })
      this.teamAdminservice.form.reset();
      this.teamAdminservice.initializeFormGroup();
      this.notificationteamAdminservice.success(':: Submitted successfully');
      this.onClose();
    }
   this.reloadPage();
  }
  reloadPage() {
    setTimeout(()=>{
        window.location.reload();
      }, 1000);  
  }

  onClose() {
    this.teamAdminservice.form.reset();
    this.teamAdminservice.initializeFormGroup();
    this.dialogRef.close();
  }

}



