export class Trabajo{
   
    id?:number; 
    nombre : string;
    comentario:string;
    posicion:string;
    foto:string;

    constructor(nombre:string,comentario:string,posicion:string,foto:string) {
      
       this.nombre = nombre;
       this.comentario = comentario;
       this.posicion = posicion;
       this.foto = foto; 
 
   }
}