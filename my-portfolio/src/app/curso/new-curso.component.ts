import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../model/curso.model';
import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-new-curso',
  templateUrl: './new-curso.component.html',
  styleUrls: ['./new-curso.component.css']
})
export class NewCursoComponent implements OnInit {
  
  nombre : string='';
  lugar : string='';
  fecha : string='';
  constructor(private cursoService:CursoService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const curs = new Curso(this.nombre,this.lugar,this.fecha);
    this.cursoService.save(curs).subscribe(data=>{
      alert("curso añadido");
      this.router.navigate([''])
    },err=>{
      alert('No se pudo añadir ');
      this.router.navigate(['']);
    }
    )
   }
}
