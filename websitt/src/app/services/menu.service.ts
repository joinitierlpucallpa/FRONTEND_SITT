import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { menu } from '../Models/menu';
import { ROOT_URL } from '../Models/Config';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public idDependencia:string;
  apiUrl: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json');  
  constructor(private http: HttpClient) { }  
  getAllMenuSystems() {
    this.apiUrl = ROOT_URL.concat("Subsistema/GetMenus/").concat(this.idDependencia);
    console.log(this.idDependencia);
    console.log(this.apiUrl);
    return this.http.get<menu[]>(this.apiUrl);
  }
}
