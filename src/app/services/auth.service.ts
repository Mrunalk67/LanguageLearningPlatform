import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public login(payload){
    const headers={};
    const httpOptions={headers: new HttpHeaders(headers)};
    return this.http.post<any>('http://localhost:8080/api/auth/login',payload,httpOptions);
  }


}
