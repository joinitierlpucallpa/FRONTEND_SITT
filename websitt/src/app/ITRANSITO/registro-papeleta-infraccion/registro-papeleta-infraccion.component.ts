import { Component, OnInit } from '@angular/core';
import { UtilitarioService } from 'src/app/services/utilitario.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { ReniecDni } from 'src/app/Models/ReniecDni';
import { ReniecDniResult } from 'src/app/Models/ReniecDniResult';


@Component({
  selector: 'app-registro-papeleta-infraccion',
  templateUrl: './registro-papeleta-infraccion.component.html',
  styleUrls: ['./registro-papeleta-infraccion.component.css']
})
export class RegistroPapeletaInfraccionComponent implements OnInit {

  reniecDni:ReniecDni;
  reniecDniResult:ReniecDniResult[];
  fapepat:String="";
  fapemat:String="";
  fnombres:String="";
  fdniConductor:String="";
  respuesta:string;

  constructor(private utilservice:UtilitarioService, private router:Router) { }

  ngOnInit(): void {
  }  

  BuscarDNI()
  {    
    this.utilservice.reniecDni.nuDniConsulta=this.fdniConductor;
    this.utilservice.reniecDni.password="";
    this.fnombres="";
    this.fapepat="";
    this.fapemat="";

    this.utilservice.getDatosPersonalesByDNI().subscribe((tempdate) =>{  this.reniecDniResult=tempdate;
      //console.log(this.reniecDniResult[0].prenombres);
      //alert(this.reniecDniResult[0].prenombres);
      this.fnombres=this.reniecDniResult[0].prenombres;
      this.fapepat= this.reniecDniResult[0].apPrimer;
      this.fapemat= this.reniecDniResult[0].apSegundo;
      

    })  
    ,err=>{  
      console.log(err);  
    }  
  }

  cargarDatos($event){

    this.respuesta=$event;
    this.fdniConductor=this.respuesta["dni"];
    this.fapepat=this.respuesta["apepat"];
    this.fapemat=this.respuesta["apemat"];
    this.fnombres=this.respuesta["nombres"];
    console.log(this.respuesta);

  }



}
