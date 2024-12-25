using Microsoft.AspNetCore.Mvc;
using NotesManagementBackend.Models;
using NotesManagementBackend.Models.DTOs;
using NotesManagementBackend.Services;
using NotesManagementBackend.Repositories;
using Microsoft.AspNetCore.SignalR;

[ApiController]
[Route("api/[controller]")]
public class NotesController : ControllerBase
{
    private static List<NoteModel> notes = new List<NoteModel>
{
    new NoteModel { Type = "Regular Note", Content = "This is a sample regular note." },
    new NoteModel { Type = "Reminder", Content = "Doctor’s appointment at 4 PM.", Reminder = DateTime.Now.AddHours(2) },
    new NoteModel { Type = "ToDo", Content = "Complete the Angular project.", DueDate = DateTime.Now.AddDays(1), IsCompleted = false },
    new NoteModel { Type = "Bookmark", Content = "https://angular.io/" }
};


    [HttpGet]
    public IActionResult GetNotes()
    {
        return Ok(notes);
    }

    [HttpPost]
    public async Task<IActionResult> AddNote([FromBody] NoteModel newNote, [FromServices] IHubContext<NotificationHub> hubContext)
    {
        if (string.IsNullOrEmpty(newNote.Type) || string.IsNullOrEmpty(newNote.Content))
        {
            return BadRequest("Type and content are required.");
        }

        if (newNote.Content.Length > 100)
        {
            return BadRequest("Note content cannot exceed 100 characters.");
        }

        if (newNote.Type == "Reminder" && newNote.Reminder == null)
        {
            return BadRequest("Reminder notes must include a reminder date and time.");
        }

        if (newNote.Type == "ToDo" && (newNote.DueDate == null || newNote.IsCompleted == null))
        {
            return BadRequest("ToDo notes must include a due date and completion status.");
        }

        if (newNote.Type == "Bookmark" && !Uri.IsWellFormedUriString(newNote.Content, UriKind.Absolute))
        {
            return BadRequest("Bookmark notes must contain a valid URL.");
        }

        notes.Add(newNote);

        await hubContext.Clients.All.SendAsync("ReceiveNote", newNote);
        
        return Ok(notes);
    }
}
