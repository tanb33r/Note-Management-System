using NotesManagementBackend.Models;

namespace NotesManagementBackend.Repositories
{
  public static class InMemoryUserStore
  {
    public static List<User> Users = new List<User>();
  }
}
