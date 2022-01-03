import { Component, OnInit } from '@angular/core';
import { teamService } from '../shared/teams.service';
import { teams } from './teams-list';
import { Teams } from './teams.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
 // public teamsList: Teams[] = teams;
  public teamsList: any = [];
  constructor( private teamsService : teamService) { }

  ngOnInit(): void {
    this.teamsService.all().subscribe(
      res => this.teamsList = res
    );
  }

}
