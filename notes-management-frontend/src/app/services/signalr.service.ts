import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  private noteReceived = new Subject<any>();

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.backendUrl}/notificationHub`) // Update URL as needed
      .build();

    this.hubConnection.start().catch(err => console.error('Error starting SignalR connection: ', err));
    this.hubConnection.on('ReceiveNote', (note) => {
      this.noteReceived.next(note);
    });
  }

  getNoteUpdates(): Observable<any> {
    return this.noteReceived.asObservable();
  }
}
