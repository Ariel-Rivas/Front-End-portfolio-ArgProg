import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from '../model/experienciaLaboral.model';
import { ExperienciaLaboralService } from '../servicios/experienciaLaboral.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  expe: ExperienciaLaboral[] = [];
 

  constructor(private experienciaLaboralService: ExperienciaLaboralService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void { 
    this.cargarExperiencia();
   
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaLaboralService.lista().subscribe(data => { this.expe = data; })
  }
  
  delete(id?: number){
    if(id != undefined){
      this.experienciaLaboralService.delete(id).subscribe( 
          data => {
          this.cargarExperiencia(); 
         }, err => {
          alert("No se pudo eliminar la experiencia");
    }
    ) 
    
       }
    
  } 
}
  

  
      
 
  