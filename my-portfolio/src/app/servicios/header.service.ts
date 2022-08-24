import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Persona } from "../model/persona.model";

@Injectable({
    providedIn: 'root'
  })
  export class headerService { 
 private apiServerUrl = environment.apiBaseUrl; 


    constructor(private http: HttpClient){}

public getPer() : Observable<Persona> {
    return  this.http.get <Persona>('${this.apiServerUrl}/persona/id/1')
}

public updatePersona(Persona:Persona):Observable<Persona>{
    return  this.http.put <Persona>('${this.apiServerUrl}/persona/update',Persona);
}
  }
