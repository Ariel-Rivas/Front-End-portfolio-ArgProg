export class ExperienciaLaboral{
    id?:number;
    nombre : string;
    lugar:string;
    fecha:string;
    tarea:string;

    constructor(nombre:string,lugar:string,fecha:string,tarea:string) {
      
       this.nombre = nombre;
       this.lugar = lugar;
       this.fecha = fecha;
       this.tarea = tarea; 
 
   }
}