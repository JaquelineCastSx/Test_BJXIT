import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  //verify if the role from the local storage to display the sidebar elements
  isAdmin: boolean = false;
  isManager: boolean = false;
  isSalesman: boolean = false;
  items: any[] = [];

  constructor() {}
  ngOnInit() {
    const rol = localStorage.getItem('rol');
    if (rol === 'Administrador') {
      this.isAdmin = true;
      this.items = [
        { name: 'Usuarios', route: '/admin/usuarios' },
        { name: 'Productos', route: '/admin/productos' },
        { name: 'Reportes', route: '/admin/reportes/existencias' },
        { name: 'Pedidos', route: '/admin/pedidos' }
      ];
    } else if (rol === 'Personal Administrativo') {
      this.isManager = true;
      this.items = [
        { name: 'Productos', route: '/admin-personal/productos' },
        { name: 'Reportes', route: '/admin-personal/reportes/existencias' },
        { name: 'Agregar producto', route: '/admin-personal/productos/nuevo' },
        { name: 'Editar producto', route: '/admin-personal/productos/editar/:id' },
        { name: 'Pedidos', route: '/admin-personal/pedidos' }
      ];
    } else if (rol === 'Vendedor') {
      this.isSalesman = true;
      this.items = [
        { name: 'Agregar Pedido', route: '/vendedor/nuevo-pedido' },
        { name: 'Pedidos', route: '/vendedor/pedidos' }
      ];
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    window.location.href = '/login'; // Redirigir a la página de inicio de sesión
  }
}
