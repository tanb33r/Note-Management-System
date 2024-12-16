﻿using BCrypt.Net;

namespace NotesManagementBackend.Services
{
  public class AuthService
  {
    public string HashPassword(string password)
    {
      return BCrypt.Net.BCrypt.HashPassword(password);
    }

    public bool VerifyPassword(string password, string hashedPassword)
    {
      return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
    }
  }
}
