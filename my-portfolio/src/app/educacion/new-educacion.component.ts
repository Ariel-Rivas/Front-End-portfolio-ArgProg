import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../model/educacion.model';
import { EducacionService } from '../servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  
  nombre : string='';
  lugar : string='';
  estado: string='';
  constructor(private educacionService:EducacionService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const educ = new Educacion(this.nombre,this.lugar,this.estado);
    this.educacionService.save(educ).subscribe(data=>{
      alert("Educacion añadida");
      this.router.navigate([''])
    },err=>{
      alert('No se pudo añadir ');
      this.router.navigate(['']);
    }
    )
   }
}
