import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrl =  `${environment.apiUrl}/notes` // Update with your backend URL

  constructor(private http: HttpClient) {}

  getNotes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addNote(note: Note): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl, note);
  }
}
