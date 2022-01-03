import { Component, OnInit } from '@angular/core';
import {voitures} from "./../voiture-list";
import { voiture } from "./../voiture.model";
import { rentmodel } from './rentmodel.model';

import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { FavService } from 'src/app/shared/fav.service';
import { NotificationService } from '../shared/notification.service';
import { RentService } from '../shared/rent.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RentrdvService } from '../shared/rdv.service';


@Component({
  selector: 'app-cars-rent',
  templateUrl: './cars-rent.component.html',
  styleUrls: ['./cars-rent.component.css']
})
export class CarsRentComponent implements OnInit {
  public voituresList: any = [];
  public favContent: any[]= [];
  public formValue: FormGroup;
  rentmodel: rentmodel = new rentmodel();
  constructor(
    private favService: FavService , 
    private notificationService : NotificationService , 
    private rentService: RentService,
    private rdvservice: RentrdvService,
    private formBuilder:FormBuilder,
    public router:Router     ) 
    {
      this.formValue = this.formBuilder.group({
        Nom_Voiture: [''],
        Nom_utilisateur: [''],
        email: [''],
        Date_debut: [''],
        Date_fin: [''],
      });
     }
  ngOnInit(): void {
        //this.favContent = this.localStorageService.get('fav');
this.getcars();
  }
  

 getcars() {

  this.rentService.getcars().subscribe(
    res => this.voituresList = res);
 }
  public addTofav(id: string):void {
    this.favService.add(id);
    this.notificationService.success('! Add successfully');
}

public addRent() {
  this.rdvservice.create(this.formValue.value).subscribe(()=>{
      this.formValue.reset();
      this.rentService.initializeFormGroup();
      this.notificationService.success('! Add successfully');
       this.getcars();
       this.reloadPage();
  })
    }

onEditRent(voiture: any) {
  this.rentmodel.id = voiture.id;
  this.formValue.controls['Nom_Voiture'].setValue(voiture.modele);
}

reloadPage() {
  setTimeout(()=>{
      window.location.reload();
    }, 1000);  
}

}
