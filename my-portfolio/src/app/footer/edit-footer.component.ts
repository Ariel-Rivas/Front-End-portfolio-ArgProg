import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-edit-footer',
  templateUrl: './edit-footer.component.html',
  styleUrls: ['./edit-footer.component.css']
})
export class EditFooterComponent implements OnInit {

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