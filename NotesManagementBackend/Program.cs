using NotesManagementBackend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSignalR(); // Add SignalR service
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddScoped<AuthService>();

builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowAngularApp",
      policy => policy.WithOrigins("http://localhost:4200") // update the url as per your need
                      .AllowAnyHeader()
                      .AllowAnyMethod()
               .AllowCredentials());
});

var app = builder.Build();
app.UseCors("CorsPolicy");
app.UseCors("AllowAngularApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapHub<NotificationHub>("/notificationHub"); // Map the SignalR hub
});

app.MapControllers();

app.Run();
