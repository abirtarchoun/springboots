import { Component, OnInit } from '@angular/core';
import { clients } from '../clients-list';
import { Clients } from '../clients.model';
import { clientService } from '../shared/clients.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
 // public clientsList: Clients[] = clients;
  public clientsList : any = [];
  constructor( private clientservice : clientService) { }

  ngOnInit(): void {
    this.clientservice.all().subscribe(
      res => this.clientsList = res
    );
  }

}
