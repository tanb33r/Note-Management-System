// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user : User = {
    name: '',
    email: '',
    dateOfBirth: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.user.name && this.user.email && this.user.dateOfBirth && this.user.password) {
      this.authService.register(this.user).subscribe(
        (response: any) => {
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.log(error);
          alert('Registration failed! Please try again.');
        }
      );
    }
  }
}
