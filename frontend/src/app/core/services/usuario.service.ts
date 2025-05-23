import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:5197/api/ControllerUsuarios';

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.apiUrl}`);
  }
  getUsuarioById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createUsuario(usuario: any) {
    return this.http.post(`${this.apiUrl}`, usuario);
  }
  updateUsuario(id: number, usuario: any) {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }
  deleteUsuario(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
