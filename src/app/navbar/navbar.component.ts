import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "src/app/shared/local-storage.service";
import { AuthService } from "src/app/shared/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any;

  constructor(
    private localStorageService: LocalStorageService,
    public authService: AuthService
  ) {
    this.currentUser = this.localStorageService.get('user');
  }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    this.ngOnInit();
    this.reloadPage();
  }


  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
}

}
