import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:5197/api/ControllerProductos';
  constructor(private http: HttpClient) { }
  getProducto(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  getProductoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createProducto(producto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, producto);
  }
  updateProducto(id: number, producto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }
  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
