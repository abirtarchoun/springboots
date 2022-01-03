import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { Teams } from '../teams/teams.model';



@Injectable({
  providedIn: 'root'
})
export class TeamAdminService {
  
 private base_url='http://localhost:3000/Teams';

  // API BACKEND
 //private base_url='http://localhost:3000/api/teams';


  constructor(private http :HttpClient) { }

  //http opttion
  httpOptions={ 
    headers:new HttpHeaders({
      'content-type':'application/json'

    })
  }
  //handel api  errors 
  handleError(error: HttpErrorResponse){
    if( error.error instanceof ErrorEvent){
    //a client-side or a neetwork error occurend .Handel it accordingly
    console.error('An Error occurend' , error.error.message)

  }
  else{
    // the backend may returned an successfully response code 
    // the response body may contain clues as to what went wrong 
    console.error(`backend returned code ${error.status}, ` +
    `body was : ${ error.error}`
    );}
   // return an observabel with a user-facing error message 
  return throwError( 'something bad happined , please try again later .');
};


// insert 
create(item : Teams):Observable<Teams>{
  return this.http.post<Teams>(this.base_url,JSON.stringify(item),this.httpOptions).pipe(retry(2),catchError(this.handleError));
}

//get all team data 
 get():Observable<Teams>{
   return this.http.get<Teams>(this.base_url).pipe(retry(2),catchError(this.handleError));
 }


  // get team by id
  getByid(id:number):Observable<Teams>{
    return this.http.get<Teams>(this.base_url + '/' +id).pipe(retry(2),catchError(this.handleError));

  }

   // update team by Id the
   update(item :any){
     return this.http.put<Teams>(this.base_url + '/' +item.id,JSON.stringify(item),this.httpOptions).pipe(retry(2),catchError(this.handleError));
   }

    // delete cars
    delete(id:number){
      return this.http.delete<Teams>(this.base_url + '/' +id,this.httpOptions).pipe(retry(2),catchError(this.handleError));

}

//validation formulaire
  form : FormGroup= new FormGroup({
    id: new FormControl(null),
   name: new FormControl('',Validators.required),
   mail : new FormControl('',[ Validators.required,Validators.email]),
  phone: new FormControl(null,[Validators.required,Validators.minLength(8)]),
  city : new FormControl('',Validators.required),
 // image : new FormControl('',Validators.required),
});

// inialisation formulaire 
initializeFormGroup() {
  this.form.setValue({
    id :null,
    name: '',
    mail :'',
    phone: null,
    city: '',
    //image:'',
  });
}


populateForm(team: any) {
  this.form.patchValue(_.omit(team));
}

}


