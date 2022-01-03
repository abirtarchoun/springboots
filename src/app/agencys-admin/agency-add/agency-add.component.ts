import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Agency } from 'src/app/about.model';
import { AgencyService } from 'src/app/shared/agencys.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-agency-add',
  templateUrl: './agency-add.component.html',
  styleUrls: ['./agency-add.component.css']
})
export class AgencyAddComponent implements OnInit {

  agency !: Agency[];
  datasource = new MatTableDataSource(this.agency);
  constructor( public agencyService : AgencyService, private notificationagencyService : NotificationService,public dialogRef: MatDialogRef<AgencyAddComponent>) { }

  ngOnInit(): void {
  }

  getAll() {
    this.agencyService.all().subscribe((response: any) => {
      this.datasource.data = response;
    });

  }
  
  onClear() {
    this.agencyService.form.reset();
    this.agencyService.initializeFormGroup();
  }

  onSubmit() {
    if (this.agencyService.form.valid) {
      if ( ! this.agencyService.form.get('_id')?.value)
        this.agencyService.create(this.agencyService.form.value).subscribe(() => {
          this.getAll();
        })
      else
      this.agencyService.update(this.agencyService.form.value).subscribe(() => {
        this.getAll();
      })
      this.agencyService.form.reset();
      this.agencyService.initializeFormGroup();
      this.notificationagencyService.success(':: Submitted successfully');
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
    this.agencyService.form.reset();
    this.agencyService.initializeFormGroup();
    this.dialogRef.close();
  }

}
