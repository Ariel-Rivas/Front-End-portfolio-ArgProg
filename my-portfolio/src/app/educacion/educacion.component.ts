import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion.model';
import { EducacionService } from '../servicios/educacion.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educ:Educacion[] = []; 

  constructor(private educacionService:EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void { 
    this.cargarEducacion(); 
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => { this.educ = data; })
  }
  
  delete(id?: number){
    if(id != undefined){

      this.educacionService.delete(id).subscribe(     
          data => { 
          this.cargarEducacion();  
            
        }, err => {
          alert("No se pudo eliminar la educacion");
        }
        )
      }
    
  } 
}
  
