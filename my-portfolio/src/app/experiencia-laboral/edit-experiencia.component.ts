import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from '../model/experienciaLaboral.model';
import { ExperienciaLaboralService } from '../servicios/experienciaLaboral.service';


@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expe :ExperienciaLaboral = null; 
  
  constructor(private experienciaLaboralService:ExperienciaLaboralService,private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaLaboralService.detail(id).subscribe(
      data =>{this.expe = data;
      }, err => {
        alert ('Error al modificar');
        this.router.navigate(['']);
      }
    )
  }
   onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaLaboralService.update(id, this.expe).subscribe(
      data =>{
        this.router.navigate(['']);
      },err =>{
        alert ('Error al modificar');
        this.router.navigate(['']);
      }
    )
   }
}
