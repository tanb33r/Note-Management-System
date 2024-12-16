namespace NotesManagementBackend.Models.DTOs
{
  public class RegisterRequest
  {
    public string Name { get; set; }
    public string Email { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Password { get; set; }
  }
}
