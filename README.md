# Notes Management Application

## Overview
The Notes Management Application allows users to securely register, log in, and manage different types of notes. Users can create, update, and delete notes. Notes are categorized into four types:

1. **Regular Note**: A basic text note.
2. **Reminder**: A note with a reminder (date + time).
3. **To-Do Task**: A note with a due date and a task completion status.
4. **Bookmark**: A note with a URL link.

The application consists of a **Backend** API built with .NET (ASP.NET Core Web API) and a **Frontend** built using **Angular**.

## Features
- **User Authentication**: Secure login and registration with JWT authentication.
- **Create, Update, and Delete Notes**: Users can manage their notes in various categories.
- **Secure API Communication**: All communication between the frontend and backend is done over HTTPS, ensuring secure data transfer.
- **Frontend**: The Angular frontend allows users to interact with the application through a simple and user-friendly interface.

## Tech Stack
- **Backend**:
  - ASP.NET Core Web API
  - JWT Authentication for secure login
  - In-memory data storage (no database used)
- **Frontend**:
  - Angular (for dynamic, responsive UI)
  - HTTP Client for API interaction
  - Forms for capturing user input and validating data

## Application Structure

### Backend
The backend API is structured as follows:
- **AuthController**: Handles user registration and login.
- **NotesController**: Manages CRUD operations for the notes (Create, Read, Update, Delete).
- **Services**: Includes the logic for password hashing, note management, etc.
- **Models**: Defines the data structures for User and Note.
- **JWT Authentication**: Secures API endpoints by requiring a valid JWT token for access.

### Frontend
The Angular frontend is structured as follows:
- **Components**:
  - `LoginComponent`: Allows users to log in.
  - `RegisterComponent`: Allows users to register.
  - `DashboardComponent`: Displays the list of notes and provides options to add new notes.
  - `NoteComponent`: Displays individual note details and allows editing.
- **Services**:
  - `AuthService`: Handles user authentication and storing JWT tokens.
  - `NotesService`: Communicates with the backend API to fetch, add, update, or delete notes.
- **Routing**: Navigates between login, registration, and dashboard pages.
  
## Getting Started

### Prerequisites

- .NET 6 or higher
- Node.js (for running Angular frontend)
- Angular CLI

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Note-Management.git

   Navigate to the backend folder:

cd NotesManagementBackend

Install the required dependencies:

dotnet restore

Run the backend API:

    dotnet run

    The backend API should now be running on https://localhost:7122.

Frontend Setup

    Navigate to the frontend folder:

cd notes-management-frontend

Install the required dependencies:

    npm install


Run the Angular frontend:

    ng serve

    The frontend application should now be accessible at http://localhost:4200.

Usage

    Register: Create a new account by providing your username, email, and password.
    Login: Log in to the application with your registered credentials.
    Dashboard: After logging in, you will be redirected to the dashboard, where you can manage your notes.
    Add Notes: You can add a new note by selecting the appropriate type (Regular, Reminder, To-Do, or Bookmark) and filling in the necessary fields.
    Manage Notes: You can view, edit, or delete notes from the dashboard.

API Endpoints

    POST /api/auth/register: Registers a new user.
    POST /api/auth/login: Logs in a user and returns a JWT token.
    GET /api/notes: Retrieves all notes.
    POST /api/notes: Creates a new note.
    PUT /api/notes/{id}: Updates an existing note.
    DELETE /api/notes/{id}: Deletes a note.

Notes Model

A note can be one of the following types:

    Regular Note:
        content: Text (Max Length: 100 characters)

    Reminder:
        content: Text (Max Length: 100 characters)
        reminder: Date and Time

    To-Do Task:
        content: Text (Max Length: 100 characters)
        dueDate: Date and Time
        isCompleted: Boolean

    Bookmark:
        content: URL (Max Length: 100 characters)
