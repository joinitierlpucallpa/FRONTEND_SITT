import { Component, OnInit } from '@angular/core';
import { SistemaService } from 'src/app/services/sistema.service';
import { sistema } from 'src/app/Models/sistema';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  title = '..::WEBSITT::..';
  sistemalist:sistema[];

  constructor(private dataservice:SistemaService)
  {
  }

  ngOnInit()
   {
    console.log('ok');
    
    this.dataservice.showTasks().subscribe((tempdate) =>{  this.sistemalist=tempdate;
      console.log(this.sistemalist);
    })  
    ,err=>{  
      console.log(err);  
    }  

   }


}
