import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../model/curso.model';
import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {
  
  curs : Curso = null; 
 
  constructor(private cursoService:CursoService,private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursoService.detail(id).subscribe(
      data =>{this.curs = data;
      }, err => {
        alert ('Error al modificar');
        this.router.navigate(['']);
      }
    )
  }
   onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursoService.update(id,this.curs).subscribe(
      data =>{
        this.router.navigate(['']);
      },err =>{
        alert ('Error al modificar');
        this.router.navigate(['']);
      }
    )
   }
}