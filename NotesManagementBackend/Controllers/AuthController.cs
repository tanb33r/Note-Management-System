using Microsoft.AspNetCore.Mvc;
using NotesManagementBackend.Models;
using NotesManagementBackend.Models.DTOs;
using NotesManagementBackend.Services;
using NotesManagementBackend.Repositories;

namespace NotesManagementBackend.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class AuthController : ControllerBase
  {
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
      _authService = authService;
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] RegisterRequest request)
    {
      if (InMemoryUserStore.Users.Any(u => u.Email == request.Email))
      {
        return BadRequest("User with this email already exists.");
      }

      var passwordHash = _authService.HashPassword(request.Password);

      var user = new User
      {
        Name = request.Name,
        Email = request.Email,
        DateOfBirth = request.DateOfBirth,
        PasswordHash = passwordHash
      };

      InMemoryUserStore.Users.Add(user);

      return Ok();
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
      var user = InMemoryUserStore.Users.FirstOrDefault(u => u.Email == request.Email);

      if (user == null)
      {
        return Unauthorized("Invalid email or password.");
      }

      if (!_authService.VerifyPassword(request.Password, user.PasswordHash))
      {
        return Unauthorized("Invalid email or password.");
      }

      return Ok();
    }
  }
}
