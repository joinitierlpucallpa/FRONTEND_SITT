import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import {FormsModule} from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SistemaComponent } from './ADMINISTRADOR/sistema/sistema.component';
import { MenuComponent } from './ADMINISTRADOR/menu/menu.component';
import { SistemaService } from './services/sistema.service';
import { UtilitarioService } from './services/utilitario.service';
import { LoginComponent } from './login/login.component';
import { SubsitemaComponent } from './ADMINISTRADOR/subsistema/subsistema.component';
import { SubsistemaService } from './services/subsistema.service';
import { RegistroPapeletaInfraccionComponent } from './ITRANSITO/registro-papeleta-infraccion/registro-papeleta-infraccion.component';
import { RegistroActaControlComponent } from './ITRANSITO/registro-acta-control/registro-acta-control.component';
import { ArchivamientoPapeletaComponent } from './ITRANSITO/archivamiento-papeleta/archivamiento-papeleta.component';
import { GestionExpedienteComponent } from './ITRANSITO/gestion-expediente/gestion-expediente.component';
import { GestionResolucionesComponent } from './ITRANSITO/gestion-resoluciones/gestion-resoluciones.component';
import { AtencionTalonarioComponent } from './ITRANSITO/atencion-talonario/atencion-talonario.component';
import { InternamientoVehiculoComponent } from './ITRANSITO/internamiento-vehiculo/internamiento-vehiculo.component';
import { AnulacionPapeletaInfraccionComponent } from './ITRANSITO/anulacion-papeleta-infraccion/anulacion-papeleta-infraccion.component';
import { EnvioCoactivoComponent } from './ITRANSITO/envio-coactivo/envio-coactivo.component';
import { CambiosPapeletaInfraccionComponent } from './ITRANSITO/cambios-papeleta-infraccion/cambios-papeleta-infraccion.component';
import { RecordConductorComponent } from './ITRANSITO/record-conductor/record-conductor.component';
import { RegistroPersonaNaturalComponent } from './UTILITARIOS/registro-persona-natural/registro-persona-natural.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SistemaComponent,
    MenuComponent,
    LoginComponent,
    SubsitemaComponent,
    RegistroPapeletaInfraccionComponent,
    RegistroActaControlComponent,
    ArchivamientoPapeletaComponent,
    GestionExpedienteComponent,
    GestionResolucionesComponent,
    AtencionTalonarioComponent,
    InternamientoVehiculoComponent,
    AnulacionPapeletaInfraccionComponent,
    EnvioCoactivoComponent,
    CambiosPapeletaInfraccionComponent,
    RecordConductorComponent,
    RegistroPersonaNaturalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule    
  ],
  providers: [SistemaService, SubsistemaService, UtilitarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
