import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { TeamAdminService } from 'src/app/shared/teamAdmin.service';
import { Teams } from 'src/app/teams/teams.model';
import { TeamAddComponent } from '../team-add/team-add.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  @ViewChild('teamForm', { static: false })
  teamForm!: FormGroup;
  teamsData !: Teams;
  team !: Teams[];
  searchKey!: string;
  showspinner=false;


  datasource = new MatTableDataSource(this.team)
  displayedColumns: string[] = ['name', 'mail','city', 'phone', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {}) sort!: MatSort;

  constructor(public teamAdminservice :TeamAdminService, private dialog: MatDialog, private dialogService: DialogService,
    private notificationService: NotificationService) {
    this.teamsData = {} as Teams;
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
    this.teamAdminservice.get().subscribe((response: any) => {
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
          this.teamAdminservice.delete(id).subscribe(() => {
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
    this.teamAdminservice.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(TeamAddComponent,dialogConfig);
  }

  onEdit(row: any){
    this.teamAdminservice.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(TeamAddComponent,dialogConfig);
  }


  onClear() {
    this.teamAdminservice.form.reset();
    this.teamAdminservice.initializeFormGroup();
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