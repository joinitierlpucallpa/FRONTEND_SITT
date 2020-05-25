import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './UTILITARIOS//home/home.component';
import { BodyComponent } from './UTILITARIOS//body/body.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './ADMINISTRADOR/menu/menu.component';
import { SubsitemaComponent } from './ADMINISTRADOR/subsistema/subsistema.component';
import { RegistroPapeletaInfraccionComponent } from './ITRANSITO/registro-papeleta-infraccion/registro-papeleta-infraccion.component';
import { RegistroActaControlComponent } from './ITRANSITO/registro-acta-control/registro-acta-control.component';
import { GestionResolucionesComponent } from './ITRANSITO/gestion-resoluciones/gestion-resoluciones.component';
import { GestionExpedienteComponent } from './ITRANSITO/gestion-expediente/gestion-expediente.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},  
  {path:'home',component:HomeComponent},  
  {path:'body',component:BodyComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenuComponent},
  {path:'subsistema',component:SubsitemaComponent},
  {path:'frmInfraccionTransito',component:RegistroPapeletaInfraccionComponent},
  {path:'frmActaControl',component:RegistroActaControlComponent},
  {path:'GesResolucion',component:GestionResolucionesComponent},
  {path:'GesExpediente',component:GestionExpedienteComponent},
  {path:'**',component:HomeComponent}  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent, BodyComponent]