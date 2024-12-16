import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  notes: any[] = [];
  newNote: Note = {
    type: '',
    content: '',
    reminder: '',
    dueDate: '',
    isCompleted: false,
  };

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.fetchNotes();
  }

  fetchNotes(): void {
    this.noteService.getNotes().subscribe(
      (data) => {
        this.notes = data;
      },
      (error) => {
        console.error('Error fetching notes:', error);
      }
    );
  }

  addNote(): void {
    if (this.newNote.content.length > 100) {
      alert('Note content cannot exceed 100 characters.');
      return;
    }

    this.newNote.reminder = this.newNote.reminder ? new Date(this.newNote.reminder) : null,
    this.newNote.dueDate = this.newNote.dueDate ? new Date(this.newNote.dueDate) : null,
    
    this.noteService.addNote(this.newNote).subscribe(
      (updatedNotes) => {
        this.notes = updatedNotes;
        this.resetNoteForm();
      },
      (error) => {
        console.error('Error adding note:', error);
      }
    );
  }

  resetNoteForm(): void {
    this.newNote = { type: '', content: '', reminder: '', dueDate: '', isCompleted: false };
  }
}