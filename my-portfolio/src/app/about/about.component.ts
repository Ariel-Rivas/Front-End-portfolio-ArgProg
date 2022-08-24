import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona.model';
import { CursoService } from '../servicios/curso.service';
import { PersonaService } from '../servicios/persona.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  pers:Persona[] = []; 
  

  constructor(private personaService:PersonaService,private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void { 
    
    this.cargarPersona();
     
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  
  cargarPersona(): void {
    this.personaService.lista().subscribe(data => { this.pers = data; })
  }

 
  
  delete(id?: number){
    if(id != undefined){
      this.personaService.delete(id).subscribe( 
        data => { 
        this.cargarPersona(); 
        }, err => {
        alert("No se pudo eliminar la persona");
        } 
    )
      }
    }
  }