import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso.model';
import { CursoService } from '../servicios/curso.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
   
  curs:Curso[] = []; 
  

  constructor(private cursoService:CursoService,private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void { 
    
    this.cargarCurso();
     
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  
  cargarCurso(): void {
    this.cursoService.lista().subscribe(data => { this.curs = data; })
  }

 
  
  delete(id?: number){
    if(id != undefined){
      this.cursoService.delete(id).subscribe( 
        data => { 
        this.cargarCurso(); 
        }, err => {
        alert("No se pudo eliminar el curso");
        } 
    )
      }
    }
  }

  
      

    
    


  
     

