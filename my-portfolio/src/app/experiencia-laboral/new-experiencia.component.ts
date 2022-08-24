import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from '../model/experienciaLaboral.model';
import { ExperienciaLaboralService } from '../servicios/experienciaLaboral.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
 
  nombre : string='';
  lugar : string='';
  tarea: string='';
  fecha : string='';
  constructor(private experienciaLaboralService:ExperienciaLaboralService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const expe = new ExperienciaLaboral(this.nombre,this.lugar,this.tarea,this.fecha);
    this.experienciaLaboralService.save(expe).subscribe(data=>{
      alert("experiencia añadida");
      this.router.navigate([''])
    },err=>{
      alert('No se pudo añadir ');
      this.router.navigate(['']);
    }
    )
   }
}
