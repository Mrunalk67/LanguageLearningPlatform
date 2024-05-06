import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email:any;

  constructor(
    private http: HttpClient
  ) { }

  public login(payload, options?): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/login', payload, options);
  }
  public register(payload, options?): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/register', payload, options);
  }

  

}
