import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5197/api/ControllerUsuarios';
  constructor(private http: HttpClient) { }

  login(credentials: { correo: string, contrasena: string }): Observable<any> {
     return this.http.post(`${this.apiUrl}/login`, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  getUser(): any {
    const user = localStorage.getItem('rol');
    return user;
  }
}
