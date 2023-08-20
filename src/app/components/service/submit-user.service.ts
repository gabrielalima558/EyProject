import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubmitUserService {
  private readonly API = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }

  criar(user: User): Observable<User> {
    return this.http.post<User>(this.API, user)
  }
}
