// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.user.email && this.user.password) {
      this.authService.login(this.user).subscribe(
        (response: any) => {
          // Handle successful login, maybe store JWT token and navigate
        this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          // Handle error (e.g., incorrect login)
          alert('Invalid login credentials');
        }
      );
    }
  }
}
