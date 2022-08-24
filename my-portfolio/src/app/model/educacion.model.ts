export class Educacion{
   
    id?:number; 
    nombre : string;
    lugar:string;
    estado:string;
 

    constructor(nombre:string,lugar:string,estado:string) {
      
       this.nombre = nombre;
       this.lugar = lugar;
       this.estado =estado;
     
 
   }
}