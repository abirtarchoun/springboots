import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { teamService } from 'src/app/shared/teams.service';
import { teams } from '../teams-list';
import { Teams } from '../teams.model';

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.css']
})
export class TeamsDetailsComponent implements OnInit {

  //public team?: Teams;
  id=this.route.snapshot.params['id'];
  list : any ;
  team ={
    name: "",
    mail: "",
    phone:"",
    image: "",
    city:"",

  }
  reloadPage() {
    setTimeout(()=>{
        window.location.reload();
      }, 1000);  
  }

  constructor(private route: ActivatedRoute ,private TeamService : teamService) { }

  ngOnInit(): void {
   // this.route.paramMap.subscribe(params => {
    //  const userId = params.get("id");
     // this.team = teams.filter(teams => teams._id === userId)[0];
   // });
   this.getone();
  }

  getone(){
    // status 304 ok  
     this.TeamService.get(this.id).subscribe((data)=>
     { this.list=data;
      this.team=this.list;
      console.log(this.team);
    })
   }
  


}
