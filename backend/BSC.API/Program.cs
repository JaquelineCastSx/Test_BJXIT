using Microsoft.EntityFrameworkCore;
// Add the following using if your AppDbContext is in a specific namespace, e.g.:
// using BSC.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "BSC API",
        Version = "v1",
        Description = "API para la prueba técnica de BJXIT",
        Contact = new Microsoft.OpenApi.Models.OpenApiContact
        {
            Name = "Tu Nombre",
            Email = "tu@correo.com"
        }
    });
});
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "BSC API v1");
    c.RoutePrefix = string.Empty; // Para que cargue en http://localhost:5000/
});

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // << importante
app.Run();
