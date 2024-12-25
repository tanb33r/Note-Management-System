import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { SignalRService } from './services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public notes: any[] = [];
  title = 'Notes Management';

  constructor(private authService: AuthService, private router: Router, private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.signalRService.getNoteUpdates().subscribe((note: any) => {
      console.log('New note received:', note);
      alert('New note received');
      this.notes.push(note); // Update the notes list in real-time
    });
  }
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
