export class Curso{

     id?:number;
     nombre : string;
     lugar:string;
     fecha:string;

     constructor(nombre:string,lugar:string,fecha:string) {
       
        this.nombre = nombre;
        this.lugar = lugar;
        this.fecha = fecha;
  
    }
}