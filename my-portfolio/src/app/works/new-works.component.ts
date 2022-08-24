import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from '../model/trabajo.model';
import { TrabajoService } from '../servicios/trabajo.service';

@Component({
  selector: 'app-new-works',
  templateUrl: './new-works.component.html',
  styleUrls: ['./new-works.component.css']
})
export class NewWorksComponent implements OnInit {
 foto : string='';
 nombre : string='';
 comentario : string='';
 posicion : string='';

  constructor(private trabajoService:TrabajoService,private router:Router) { }

  ngOnInit(): void {
  }
   onCreate():void{
    const trab = new Trabajo(this.foto,this.nombre,this.comentario,this.posicion);
    this.trabajoService.save(trab).subscribe(data=>{
      alert("Trabajo añadido");
      this.router.navigate([''])
    },err=>{
      alert('No se pudo añadir ');
      this.router.navigate(['']);
    }
    )
   }
   
}
