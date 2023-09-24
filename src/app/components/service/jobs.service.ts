import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from './job';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private readonly API = 'http://localhost:8723/vagas'



  constructor(private http: HttpClient) { }

  listar(): Observable<Job[]> {
    return this.http.get<Job[]>(this.API)
  }
}
