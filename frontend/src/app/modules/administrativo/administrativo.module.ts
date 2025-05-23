import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativoRoutingModule } from './administrativo-routing.module';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ReportesExistenciasComponent } from './reportes-existencias/reportes-existencias.component';
import { PedidosAdminViewComponent } from './pedidos-admin-view/pedidos-admin-view.component';


@NgModule({
  declarations: [
    ProductosListComponent,
    ProductoFormComponent,
    ReportesExistenciasComponent,
    PedidosAdminViewComponent
  ],
  imports: [
    CommonModule,
    AdministrativoRoutingModule
  ]
})
export class AdministrativoModule { }
