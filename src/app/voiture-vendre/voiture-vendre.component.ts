import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { VendreService } from '../shared/vendre.service';
import { voitures_vendre } from '../voiture-vendre';
import { voiture_vendre } from '../voiture-vendre-model';
import { BuyrdvService } from '../shared/rdvbuy.service';
import { buymodel } from './buymodel.model';



@Component({
  selector: 'app-voiture-vendre',
  templateUrl: './voiture-vendre.component.html',
  styleUrls: ['./voiture-vendre.component.css']
})
export class VoitureVendreComponent implements OnInit {
  public voituresvendreList: any = [];
  public formValue: FormGroup;
  buymodel: buymodel = new buymodel();
  constructor(
    private vendreService: VendreService ,
    private notificationService : NotificationService , 
    private rdvservice: BuyrdvService,
    private formBuilder:FormBuilder,
    public router:Router 
    ) { 
      this.formValue = this.formBuilder.group({
        Nom_Voiture: [''],
        Nom_utilisateur: [''],
        email: [''],
        Date_rdv: [''],
        localisation: [''],
      });
    }
    ngOnInit(): void {
      //this.favContent = this.localStorageService.get('fav');
this.getcars();
}


getcars() {

this.vendreService.getcars().subscribe(
  res => this.voituresvendreList = res);
}

public addRent() {
this.rdvservice.create(this.formValue.value).subscribe(()=>{
    this.formValue.reset();
    this.vendreService.initializeFormGroup();
    this.notificationService.success('! Add successfully');
     this.getcars();
     this.reloadPage();
})
  }

onEditRent(voiture: any) {
this.buymodel.id = voiture.id;
this.formValue.controls['Nom_Voiture'].setValue(voiture.modele);
}

reloadPage() {
setTimeout(()=>{
    window.location.reload();
  }, 1000);  
}
}
