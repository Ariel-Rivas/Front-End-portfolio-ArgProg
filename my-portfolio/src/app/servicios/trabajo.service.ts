import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajo } from '../model/trabajo.model';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  traURL = ' https://appari.herokuapp.com/trab/'
  constructor(private httpClient: HttpClient) { } 

  public lista():Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(this.traURL +'lista');
  }  
  public detail(id: number): Observable<Trabajo>{
    return this.httpClient.get<Trabajo>(this.traURL + `detail/${id}`);
  } 

  public save(trabajo: Trabajo): Observable<any>{
    return this.httpClient.post<any>(this.traURL + 'create', trabajo);
  }

  public update(id: number, Trabajo: Trabajo): Observable<any>{
    return this.httpClient.put<any>(this.traURL + `update/${id}`, Trabajo);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.traURL + `delete/${id}`);
  }
}
