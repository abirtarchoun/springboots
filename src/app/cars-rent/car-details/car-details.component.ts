import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { voiture } from 'src/app/voiture.model';
import { voitures } from "src/app/voiture-list";
import { FavService } from 'src/app/shared/fav.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { RentService } from 'src/app/shared/rent.service';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  //public voiture?: voiture;
  voiture={
      id: "",
      modele: "",
      description:"",
      image:"",
      Kilometrage: "",
      price :"",

  }
  list : any ;
  id=this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute ,   private favService: FavService, private notificationService :NotificationService , private rentService: RentService) { }

  ngOnInit(): void {
    this.getone();
   // this.route.paramMap.subscribe(params => {
    //  const voitureId = params.get("id");
    //  this.voiture = voitures.filter(voiture => voiture._id === voitureId)[0];
   // });
  }
  getone(){
    // status 304 ok  
     this.rentService.getByid(this.id).subscribe((data)=>
     { this.list=data;
      this.voiture=this.list;
      console.log(this.voiture);
    })
   }

  public addTofav():void {
    this.favService.add(this.voiture?.id);  
    this.notificationService.success('! Add successfully');}
    reloadPage() {
      setTimeout(()=>{
          window.location.reload();
        }, 1000);  
    }

}
