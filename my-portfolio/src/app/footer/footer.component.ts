import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';
import { TokenService } from '../servicios/token.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  pers: Persona[] = []; 
  

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


 
  }