import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { UsuariosListComponent } from './modules/admin/usuarios-list/usuarios-list.component';
import { UsuarioFormComponent } from './modules/admin/usuario-form/usuario-form.component';
import { ProductosListComponent } from './modules/administrativo/productos-list/productos-list.component';
import { ProductoFormComponent } from './modules/administrativo/producto-form/producto-form.component';
import { ReportesExistenciasComponent } from './modules/administrativo/reportes-existencias/reportes-existencias.component';
import { PedidosAdminViewComponent } from './modules/administrativo/pedidos-admin-view/pedidos-admin-view.component';
import { PedidosFormComponent } from './modules/vendedor/pedidos-form/pedidos-form.component';
import { PedidosVendedorViewComponent } from './modules/vendedor/pedidos-vendedor-view/pedidos-vendedor-view.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { vendedorGuard } from './core/guards/vendedor.guard';
import { administrativoGuard } from './core/guards/administrativo.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent},
  
      /*{ path: 'usuarios', component: UsuariosListComponent },
      { path: 'usuarios/nuevo', component: UsuarioFormComponent },
      { path: 'usuarios/editar/:id', component: UsuarioFormComponent },

      { path: 'productos', component: ProductosListComponent },
      { path: 'productos/nuevo', component: ProductoFormComponent },
      { path: 'productos/editar/:id', component: ProductoFormComponent },
      { path: 'reportes/existencias', component: ReportesExistenciasComponent },
      
      { path: 'pedidos', component: PedidosAdminViewComponent },
      { path: 'nuevo-pedido', component: PedidosFormComponent },
      { path: 'mis-pedidos', component: PedidosVendedorViewComponent },*/

      {
      path: '',
      component: DashboardComponent, // layout para vistas autenticadas
      canActivate: [authGuard],
      children: [
      {
        path: 'admin',
        canActivate: [AdminGuard],
        children: [
          { path: 'usuarios', component: UsuariosListComponent },
          { path: 'usuarios/nuevo', component: UsuarioFormComponent },
          { path: 'usuarios/editar/:id', component: UsuarioFormComponent },
          { path: 'productos', component: ProductosListComponent },
          { path: 'pedidos', component: PedidosAdminViewComponent },
          { path: 'reportes/existencias', component: ReportesExistenciasComponent },
        ]
      },
      {
        path: 'admin-personal',
        canActivate: [administrativoGuard],
        children: [
          { path: 'productos', component: ProductosListComponent },
          { path: 'reportes/existencias', component: ReportesExistenciasComponent },
          { path: 'productos/nuevo', component: ProductoFormComponent },
          { path: 'productos/editar/:id', component: ProductoFormComponent },
          { path: 'pedidos', component: PedidosAdminViewComponent },
        ]
      },
      {
        path: 'vendedor',
        canActivate: [vendedorGuard],
        children: [
          { path: 'pedidos', component: PedidosAdminViewComponent },
          { path: 'nuevo-pedido', component: PedidosFormComponent }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
