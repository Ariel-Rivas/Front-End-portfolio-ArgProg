import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {

  pers: Persona = null; 
  
 
  constructor(private personaService:PersonaService,private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{this.pers = data;
      }, err => {
        alert ('Error al modificar');
        this.router.navigate(['']);
      }
    )
  }
   onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id,this.pers).subscribe(
      data =>{
        this.router.navigate(['']);
      },err =>{
        alert ('Error al modificar');
        this.router.navigate(['']);
      }
    )
   }
}