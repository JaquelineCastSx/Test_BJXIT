import { Component } from '@angular/core';
import { LoginComponent } from './modules/auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
