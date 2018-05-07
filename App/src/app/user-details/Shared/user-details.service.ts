import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Userdetail } from './userdetail.model';
//import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserDetailsService {
  baseUrl: string = '../api';
  endpoint: string = '/UserDetails';

  constructor(private http: HttpClient) { }

  InsertUserDetails( UserInfo: Userdetail ) {
    debugger;
     //let headers = new Headers({ 'Content-Type': 'application/json' });
     //let options = new RequestOptions({ headers: headers });

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post(this.baseUrl + this.endpoint, JSON.stringify(UserInfo), { headers })
      .subscribe(res => {
        //const response = res.text();
        console.log((res));
      });
  } 
}
