import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://localhost:5197/api/ControllerPedidos';
  constructor(private http: HttpClient) { }

  getPedidos() {
    return this.http.get(`${this.apiUrl}`);
  }
  getPedidoById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createPedido(pedido: any) {
    return this.http.post(`${this.apiUrl}`, pedido);
  }
  updatePedido(id: number, pedido: any) {
    return this.http.put(`${this.apiUrl}/${id}`, pedido);
  }
  deletePedido(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getDetallePedido(id: number) {
    return this.http.get(`${this.apiUrl}/detalles/${id}`);
  }
  createDetallePedido(detalle: any) {
    return this.http.post(`${this.apiUrl}/detalles`, detalle);
  }
}
