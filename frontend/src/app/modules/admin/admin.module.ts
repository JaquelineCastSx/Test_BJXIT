import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
