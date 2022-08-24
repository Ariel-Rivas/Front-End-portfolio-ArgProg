import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  curURL = ' https://appari.herokuapp.com/curs/';
  constructor(private httpClient: HttpClient) { } 

  public lista():Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.curURL +'lista');
  }  
  public detail(id: number): Observable<Curso>{
    return this.httpClient.get<Curso>(this.curURL + `detail/${id}`);
  } 

  public save(curso: Curso): Observable<any>{
    return this.httpClient.post<any>(this.curURL + 'create', curso);
  }

  public update(id: number, curso: Curso): Observable<any>{
    return this.httpClient.put<any>(this.curURL + `update/${id}`, curso);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.curURL + `delete/${id}`);
  }
}
