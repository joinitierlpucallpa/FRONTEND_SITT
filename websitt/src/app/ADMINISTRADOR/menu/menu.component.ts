import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { menu } from 'src/app/Models/menu';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = '..::WEBSITT::..';
  menulist:menu[];
  urlTree:Router;
  id:string;

  constructor(private dataservice:MenuService, private rutaActiva: ActivatedRoute)
  {    
    this.id=this.rutaActiva.snapshot.params.id
  }
  
  ngOnInit()
   {    
       
    this.dataservice.idDependencia=this.id;
    this.dataservice.getAllMenuSystems().subscribe((tempdate) =>{  
      this.menulist=tempdate;
      console.log(tempdate);
    })  
    ,err=>{  
      console.log(err);  
    }  

   }

}
