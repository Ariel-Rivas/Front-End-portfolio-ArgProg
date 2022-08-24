import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajo } from '../model/trabajo.model';
import { TrabajoService } from '../servicios/trabajo.service';

@Component({
  selector: 'app-edit-works',
  templateUrl: './edit-works.component.html',
  styleUrls: ['./edit-works.component.css']
})
export class EditWorksComponent implements OnInit {
  trab : Trabajo = null; 
  constructor(private trabajoService:TrabajoService,private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.trabajoService.detail(id).subscribe(
      data =>{this.trab = data;
      }, err => {
        alert ('Error al modificar');
        this.router.navigate(['']);
      }
    )
  }
   onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.trabajoService.update(id,this.trab).subscribe(
      data =>{
        this.router.navigate(['']);
      },err =>{
        alert ('Error al modificar');
        this.router.navigate(['']);
      }
    )
   }
}
