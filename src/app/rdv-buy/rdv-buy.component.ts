import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { rdvbuy } from '../rdvbuy.model';
import { DialogService } from '../shared/dialog.service';
import { NotificationService } from '../shared/notification.service';
import { BuyrdvService } from '../shared/rdvbuy.service';


@Component({
  selector: 'app-rdv-buy',
  templateUrl: './rdv-buy.component.html',
  styleUrls: ['./rdv-buy.component.css']
})
export class RdvBuyComponent implements OnInit {
  @ViewChild('carsForm', { static: false })
  carsForm!: FormGroup;
  carsData !: rdvbuy;
  voiture !: rdvbuy[];
  isEditeMode = false;
  searchKey!: string;
  submitted = false ;

   showspinner=false;

  base_url = "http://localhost:3000/buysrdvs";

  datasource = new MatTableDataSource(this.voiture)
  displayedColumns: string[] = ['Nom_Voiture', 'Nom_utilisateur', 'email', 'Date_rdv', 'localisation', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {}) sort!: MatSort;

  constructor(public httpDataService:BuyrdvService , private dialog: MatDialog, private dialogService: DialogService,
    private notificationService: NotificationService) {
    this.carsData = {} as rdvbuy;
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
  ngOnInit(): void {

    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
    this.getAllCars();
  }


  getAllCars() {
    this.spinner()
    this.httpDataService.getcars().subscribe((response: any) => {
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
          this.httpDataService.delete(id).subscribe((response: any) => {
            this.datasource.data = this.datasource.data.filter((o: any) => {
              return o.id !== id ? o : false;
            })
            console.log(this.datasource.data);
          })
          this.notificationService.warn('! Deleted successfully');
          this.getAllCars();
        }
      });
  }

  updatee() {
    this.isEditeMode != this.isEditeMode
    this.httpDataService.update(this.httpDataService.form.value).subscribe(() => {
      this.getAllCars();
    })
    this.httpDataService.form.reset();
    this.httpDataService.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
    this.reloadPage();
  }

  // cancelEdit() {
  //  this.isEditeMode = false;
  //  this.carsForm.resetForm();
  //}


  // status 400 , backend yraja object object  , !! fel json-server ca fonctionne correctememnt 
  onSubmit() {

    if (this.httpDataService.form.valid) {
       this.httpDataService.create(this.httpDataService.form.value).subscribe(()=>{

        this.httpDataService.form.reset();
        this.httpDataService.initializeFormGroup();
        this.notificationService.success(' :: Add successfully ')
        this.getAllCars();
        this.reloadPage();
       })


    }

  }





  onEdit(row: any) {
    this.isEditeMode = true;
    this.httpDataService.populateForm(row);

  }

  onClear() {
    this.httpDataService.form.reset();
    this.httpDataService.initializeFormGroup();
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
