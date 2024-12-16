namespace NotesManagementBackend.Models
{
  public class NoteModel
  {
    public string Type { get; set; }
    public string Content { get; set; }
    public DateTime? Reminder { get; set; }
    public DateTime? DueDate { get; set; }
    public bool? IsCompleted { get; set; }
  }
}
