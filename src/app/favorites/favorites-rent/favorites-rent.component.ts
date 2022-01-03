import { Component, OnInit } from '@angular/core';

import { FavService } from "src/app/shared/fav.service";
import { voitures } from "src/app/voiture-list";
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { CarsRentModule } from 'src/app/cars-rent/cars-rent.module';
import { NgModule } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';
import { RentService } from 'src/app/shared/rent.service';
@Component({
  selector: 'app-favorites-rent',
  templateUrl: './favorites-rent.component.html',
  styleUrls: ['./favorites-rent.component.css']
})
export class FavoritesRentComponent implements OnInit {

  public favContent: any = [];


  constructor(
    private favService: FavService,
    private notificationService : NotificationService
  ) {}
  
  ngOnInit(): void {
    this.getfavDetails();
    console.log(this.favContent);
    imports: [ CommonModule,CarsRentModule,FavService ]

  }
  getfavDetails() {
    this.favContent = this.favService.favContent;
    for (let index = 0; index < this.favContent.length; index++) {
      const rent = voitures.filter((rent: any) => rent.id == this.favContent[index].id)[0];
      this.favContent[index].modele= rent.modele;
      this.favContent[index].price = rent.price;
      this.favContent[index].image = rent.image;


}
  }
  clearFavourites() {
    this.favService.clear();
    this.ngOnInit();
    this.notificationService.warn('!! Deleted successfully');
  }

  reloadPage() {
    setTimeout(()=>{
        window.location.reload();
      }, 1000);  
  }

}