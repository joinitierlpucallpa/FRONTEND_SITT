import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { sistema } from '../Models/sistema';
import { ROOT_URL } from '../Models/Config';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

 
  apiUrl: string = ROOT_URL.concat("Sistema");
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { 


  }

  showTasks() {
    return this.http.get<sistema[]>(this.apiUrl);
  }

}
