import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { subsistema } from '../Models/subsistema';
import { ROOT_URL } from '../Models/Config';

@Injectable({
  providedIn: 'root'
})
export class SubsistemaService {

    apiUrl: string = ROOT_URL.concat("Subsistema");
    headers = new HttpHeaders().set('Content-Type', 'application/json');  
    constructor(private http: HttpClient) { }  
    getAllSubSystems() {
      return this.http.get<subsistema[]>(this.apiUrl);
    }

    getOnlySubSystems(id:string) {
      return this.http.get<subsistema>(this.apiUrl+"/"+id);
    }

    AddSubsistema(subsist:subsistema)
    {
      const headers = new HttpHeaders().set('content-type', 'application/json');
      return this.http.post<subsistema>(this.apiUrl,subsist,{headers})
    }

    UpdateSubsistema(subsist:subsistema)
    {
      const headers = new HttpHeaders().set('content-type', 'application/json');
      return this.http.put<subsistema>(this.apiUrl.concat('/').concat(subsist.idMenu),subsist,{headers})
    }

    DeleteSubsistema(subsist:subsistema)
    {      
      return this.http.delete<subsistema>(this.apiUrl.concat('/').concat(subsist.idMenu))
    }
  
}
