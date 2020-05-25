import { Injectable } from '@angular/core';
import { ROOT_URL } from '../Models/Config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SunarpVehiculoResult } from '../Models/SunarpVehiculoResult';
import { ReniecDniResult } from '../Models/ReniecDniResult';
import { ReniecDni } from '../Models/ReniecDni';

@Injectable({
  providedIn: 'root'
})
export class UtilitarioService {

  apiUrl: string = ROOT_URL.concat("Sistema");
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  dni:String;
  reniecDni= new ReniecDni();

  constructor(private http: HttpClient) {     
    
  }

  getDatosPersonalesByDNI() {
    
    const headers = new HttpHeaders().set('content-type', 'application/json');
    console.log(ROOT_URL.concat("User/ReniecDni"));
    return this.http.post<ReniecDniResult[]>(ROOT_URL.concat("User/ReniecDni"),this.reniecDni,{headers});
  }

  getDatosVehiculoByPlaca() {
    return this.http.get<SunarpVehiculoResult[]>(ROOT_URL.concat("User/SunarpVehiculo"));
  }

}
