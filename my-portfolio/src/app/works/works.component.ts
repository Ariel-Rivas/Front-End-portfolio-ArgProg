
import { Component, OnInit } from '@angular/core';
import { Trabajo } from '../model/trabajo.model';
import { TokenService } from '../servicios/token.service';
import { TrabajoService } from '../servicios/trabajo.service';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  trab:Trabajo[] = []; 
  
 

  constructor(public trabajoService:TrabajoService, private tokenService: TokenService) { }
  
  isLogged = false;
  ngOnInit(): void { 
    this.cargarTrabajo(); 

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  } 
  cargarTrabajo(): void {
    this.trabajoService.lista().subscribe(data => { this.trab = data; })
  }  
  delete(id?: number){
    if(id != undefined){
      
      this.trabajoService.delete(id).subscribe(    
          data => { 
          this.cargarTrabajo(); 
        }, err => {
          alert("No se pudo eliminar el trabajo");
        }
        )
      }
    }
  }
  
  
       
  
    
      
  
  