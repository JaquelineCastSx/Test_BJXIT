import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService
      .login({
        correo: this.email,
        contrasena: this.password,
      })
      .subscribe({
        next: (res) => {
          console.log('Login exitoso', res);
          localStorage.setItem('user', res.id);
          // Guardar el token en el almacenamiento local
          localStorage.setItem('token', res.token);
          // evaular el rol del usuario para las pantallas de acceso segun el guard
          localStorage.setItem('rol', res.rol);
          // Redirigir a la página de usuarios
          window.location.href = '/dashboard'; // Redirigir a la página de usuarios
        },
        error: (err) => {
          console.error('Error de inicio de sesión', err);
          alert('Credenciales incorrectas');
        }
      });
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      const user = this.authService.getUser();
      if (user) {
        window.location.href = '/dashboard'; // Redirigir a la página de usuarios
      }
    }
  }
}
