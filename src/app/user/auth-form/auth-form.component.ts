import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent {
  isLoginMode: Boolean = true;

  constructor(route: Router) {
    this.isLoginMode = route.routerState.snapshot.url === '/login';
  }
  
}
