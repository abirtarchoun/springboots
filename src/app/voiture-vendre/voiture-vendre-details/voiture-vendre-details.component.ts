import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendreService } from 'src/app/shared/vendre.service';
import { voitures_vendre } from '../../voiture-vendre';
import { voiture_vendre } from '../../voiture-vendre-model';

@Component({
  selector: 'app-voiture-vendre-details',
  templateUrl: './voiture-vendre-details.component.html',
  styleUrls: ['./voiture-vendre-details.component.css']
})
export class VoitureVendreDetailsComponent implements OnInit {
  

//  public voiturevendre?: voiture_vendre;

//   constructor(private route: ActivatedRoute , private vendreService: VendreService) { }

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//      const userId = params.get("id");
//       this.voiturevendre = voitures_vendre.filter(voitures_vendre => voitures_vendre.id === userId)[0];
//     })
//   }

//public team?: Teams;
id=this.route.snapshot.params['id'];
list : any ;
voiturevendre ={
  id: "",
  modele: "",
  description:"",
  image:"",
  Kilometrage: "",
  price :"",

}


constructor(private route: ActivatedRoute ,private vendreService : VendreService) { }

ngOnInit(): void {
 // this.route.paramMap.subscribe(params => {
  //  const userId = params.get("id");
   // this.team = teams.filter(teams => teams._id === userId)[0];
 // });
 this.getone();
}

getone(){
  // status 304 ok  
   this.vendreService.getByid(this.id).subscribe((data)=>
   { this.list=data;
    this.voiturevendre=this.list;
    console.log(this.voiturevendre);
  })
 }


}
 