import { Component, OnInit } from '@angular/core';
import { Agencys } from '../about-list';
import { Agency } from '../about.model';
import { AgencyService } from '../shared/agencys.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // public agencyList : Agency[] = Agencys ;
   public agencyList : any = [];

  constructor(private agencyService : AgencyService) { }

  ngOnInit(): void {
    this.agencyService.all().subscribe(
      res => this.agencyList = res
    );
  }

}
