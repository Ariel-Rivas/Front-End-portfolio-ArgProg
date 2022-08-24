
import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';
import {ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit { 

  pers:Persona [] = [];
 
  
  constructor(public personaService:PersonaService,private router:Router,private tokenService:TokenService,private activatedRouter:ActivatedRoute) { }
 
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
          alert("No se pudo eliminar ");
    }
    ) 
    
       }
    
  } 
 
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();


  }
  login(){
    this.router.navigate(['/login'])
  }  

}
   


 



 


   
    
 
    
  

