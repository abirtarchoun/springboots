import { Component, OnInit } from '@angular/core';
import {voitures} from "./../voiture-list";
import { voiture } from "./../voiture.model";
import { LocalStorageService } from "src/app/shared/local-storage.service";
import { AuthService } from "src/app/shared/auth.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;

  public voituresList: voiture[] = voitures;

  constructor(
    private localStorageService: LocalStorageService,
    public authService: AuthService
  ) {
    this.currentUser = this.localStorageService.get('user');
  }


  ngOnInit(): void {
    
  }

}
