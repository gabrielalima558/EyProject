import { Login } from './login';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = 'http://localhost:8723/auth/login'

  constructor(private http: HttpClient) {}

   /*login(auth: Login): Observable<void> {
    return this.http.post<Token>(this.API, auth).pipe (
      map((response) =>
        localStorage.setItem("token",  JSON.stringify(response))
      )
    )
  }*/
  login(login: Login): Observable<any> {
    return this.http.post(this.API, login, {responseType:'text'}).pipe(
      map((response) =>
        localStorage.setItem('token', response)
      )
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
}
