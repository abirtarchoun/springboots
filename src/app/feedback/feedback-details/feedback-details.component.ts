import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clients } from 'src/app/clients-list';
import { Clients } from 'src/app/clients.model';
import { clientService } from 'src/app/shared/clients.service';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {
   //public client?: Clients;
 client={
  name :"",
  mail: "",
  image: "",
  city: "",
  description: "",
  job : "",
}
 list : any ;
 id=this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute , private ClientService : clientService) { }

  ngOnInit(): void {

     this.getone();   
     //this.route.paramMap.subscribe(params => {
     // const userId = params.get("id");
     // this.client = clients.filter(clients => clients._id === userId)[0];
    //});
  }
  getone(){
    // status 200 ok  
     this.ClientService.get(this.id).subscribe((data)=>
     { this.list=data;
      this.client=this.list;
      console.log(this.client);
    })

  }
  reloadPage() {
    setTimeout(()=>{
        window.location.reload();
      }, 1000);  
  }
  

}
