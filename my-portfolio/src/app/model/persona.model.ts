export class Persona{


    id?:number;
     nombre:string;
     telefono:string;
     email:string;
     about:string;
     foto:string;
     direccion:string;
     cp:string;
     ciudad:string; 
    constructor(nombre:string, telefono:string,  email:string,about:string, foto:string,direccion:string, cp:string, ciudad:string ){
     this.nombre = nombre; 
     this.telefono = telefono;
     this.email = email; 
     this.about = about; 
     this.foto = foto; 
     this.direccion = direccion; 
     this.cp = cp; 
     this.ciudad = ciudad; 


    }
}