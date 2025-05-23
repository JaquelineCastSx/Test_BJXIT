import { Component } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.scss'
})
export class UsuariosListComponent {
  usuarios: any[] = [];
  constructor(private usuariosService: UsuarioService) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios as any[];
      console.log(this.usuarios);
    }
    );
  }
}
