import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {

  constructor(
    private http: HttpClient
  ) { }

  public getlanguages(): Observable<any> {
    const headers={};
    const httpOptions= {headers: new HttpHeaders(headers)};
    return this.http.get<any>('http://localhost:8080/api/get-supported-languages');
  }

  public languages(payload, options?): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/update-languages-for-user', payload, options);
  }

}
