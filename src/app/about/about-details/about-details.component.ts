import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agency } from 'src/app/about.model';
import { Agencys } from 'src/app/about-list';
import { AgencyService } from 'src/app/shared/agencys.service';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.css']
})
export class AboutDetailsComponent implements OnInit {
  //public Agency?:Agency;
  Agency ={    
    owner: "",
    description: "",
    image: "",
    location: "",
    date_creation:"",} ;
     list : any ;
     _id=this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute, private agencyService : AgencyService) { }

  ngOnInit(): void {
  
    this.getone();
  
}

getone(){
  // status 304 ok  
   this.agencyService.getByid(this._id).subscribe((data)=>
   { this.list=data;
    this.Agency=this.list;
    console.log(this.Agency);
  })
 }

}
