import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notes Management';

  constructor(private authService: AuthService, private router: Router) {}

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  // Logout the user
  logout(): void {
    localStorage.removeItem('authToken'); // Remove token
    this.router.navigate(['/login']); // Redirect to login page
  }
}
