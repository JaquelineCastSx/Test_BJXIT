import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';
import { PedidosVendedorViewComponent } from './pedidos-vendedor-view/pedidos-vendedor-view.component';


@NgModule({
  declarations: [
    PedidosFormComponent,
    PedidosVendedorViewComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
