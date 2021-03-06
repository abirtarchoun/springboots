import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";


import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LocalStorageService } from "src/app/shared/local-storage.service";

import { User } from 'src/app/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  //public isLoggedIn:boolean = false;
  currentUser: any = null;
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorageService: LocalStorageService
  ) {
   // this.isLoggedIn = this.getAccessToken() ? true : false;
   }
  

  signup(user: User): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/auth/signup`, user).pipe(
        catchError(this.handleError)
    )
  }

  login(user: User) {
    return this.httpClient.post<any>(`${this.API_URL}/auth/login`, user)
      .subscribe((res: any) => {
        //this.isLoggedIn = true;
        this.localStorageService.set('access_token', res.token);
        this.getUserProfile(res.userId).subscribe((res) => {
          this.localStorageService.set('user', {email: res.email, id: res.id, name: res.name});
          this.currentUser = res;
          this.router.navigate(['home']);
        })
      })
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '') ;
    return (user !== null ) ? true : false;
  }


  getUserProfile(id: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/auth/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Object) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  } 

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  getAccessToken() {
    return this.localStorageService.get('access_token');
  }

  logout() {
    this.localStorageService.set('access_token', null);
    this.localStorageService.set('user', null);
    //this.isLoggedIn = false;
    this.router.navigate(['/']);
 
  }
}
