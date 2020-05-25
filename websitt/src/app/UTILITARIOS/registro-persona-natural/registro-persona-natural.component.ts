import { Component, OnInit, EventEmitter,Output,ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-registro-persona-natural',
  templateUrl: './registro-persona-natural.component.html',
  styleUrls: ['./registro-persona-natural.component.css']
})
export class RegistroPersonaNaturalComponent implements OnInit {

  @ViewChild('closebutton') closebutton;
  fApePatPersona:String="";
  fApeMatPersona:String="";
  fNombrePersona:String="";
  fdniPersona:String="";
  fUbigeoPersona:String="";

  @Output() fdniPersonaO = new EventEmitter();
  @Output() fApePatPersonaO = new EventEmitter<String>();
  @Output() fApeMatPersonaO = new EventEmitter<String>();
  @Output() fNombrePersonaO = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }


  BuscarPersonaDNI()
  {    
    alert(this.fApePatPersona);
  }

  SavePersona(regForm:NgForm)
    {
      //alert(regForm.value.fdniPersona);
      this.fdniPersonaO.emit({dni:this.fdniPersona,apepat:this.fApePatPersona,apemat:this.fApeMatPersona,nombres:this.fNombrePersona});      
      this.limpiar();
      this.closebutton.nativeElement.click();
    }

    limpiar()
    {

      this.fdniPersona="";
      this.fApePatPersona="";
      this.fApeMatPersona="";
      this.fNombrePersona="";
    }


}
