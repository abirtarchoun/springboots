import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Agency } from 'src/app/about.model';
import { AgencyService } from 'src/app/shared/agencys.service';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { AgencyAddComponent } from '../agency-add/agency-add.component';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit {

  @ViewChild('agenyForm', { static: false })
  agenyForm!: FormGroup;
  agencyData !: Agency;
  agency!:Agency[];
  searchKey!: string;
  showspinner=false;


  datasource = new MatTableDataSource(this.agency)
  displayedColumns: string[] = ['owner', 'location', 'date_creation','image', 'description','actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort,{}) sort!: MatSort;

  constructor(public agencyService : AgencyService ,private dialog: MatDialog, private dialogService: DialogService,
    private notificationService: NotificationService) {
    this.agencyData = {} as Agency;
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
  ngOnInit(): void {

    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
    this.getAll();
  }


  getAll() {
    this.spinner()
    this.agencyService.all().subscribe((response: any) => {
      this.datasource.data = response;
    });

  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.datasource.filter = this.searchKey.trim().toLowerCase();
  }

  onDelete(id: number) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe((res: any) => {
        if (res) {
          this.agencyService.delete(id).subscribe(() => {
            this.datasource.data = this.datasource.data.filter((o: any) => {
              return o.id !== id ? o : false;
            })
            console.log(this.datasource.data);
          })
          this.notificationService.warn('! Deleted successfully');
          this.getAll();
        }
      });
  }
  onCreate() {
    this.agencyService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AgencyAddComponent,dialogConfig);
  }

  onEdit(row: any){
    this.agencyService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AgencyAddComponent,dialogConfig);
  }


  onClear() {
    this.agencyService.form.reset();
    this.agencyService.initializeFormGroup();
  }


  reloadPage() {
    setTimeout(()=>{
        window.location.reload();
      }, 1000);  
  }

  spinner(){ 
    this.showspinner=true;
    setTimeout(() => {this.showspinner=false;},2000)
  }
}