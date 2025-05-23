using BSC.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;



namespace BSC.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ControllerUsuarios : ControllerBase
  {
    private readonly AppDbContext _context;
    public ControllerUsuarios(AppDbContext context)
    {
      _context = context;
    }

    private string GenerateJwtToken(Usuario usuario)
{
    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Clave_JWT!_2025.Prueba-BJXIT_Castillo_4"));
    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier, usuario.id.ToString()),
        new Claim(ClaimTypes.Email, usuario.correo),
        new Claim(ClaimTypes.Role, usuario.rol_id.ToString())
    };

    var token = new JwtSecurityToken(
        issuer: "bscapi",
        audience: "bscapp",
        claims: claims,
        expires: DateTime.Now.AddHours(1),
        signingCredentials: credentials
    );

    return new JwtSecurityTokenHandler().WriteToken(token);
}



    [HttpGet]
    public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
    {
      return await _context.Usuarios.ToListAsync();
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Usuario>> GetUsuario(int id)
    {
      var usuario = await _context.Usuarios.FindAsync(id);
      if (usuario == null) return NotFound();
      return usuario;
    }

    [HttpPost]
    public async Task<ActionResult<Usuario>> CreateUsuario(Usuario usuario)
    {
      _context.Usuarios.Add(usuario);
      await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetUsuario), new { id = usuario.id }, usuario);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUsuario(int id, Usuario usuario)
    {
      if (id != usuario.id) return BadRequest();
      _context.Entry(usuario).State = EntityState.Modified;
      await _context.SaveChangesAsync();
      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUsuario(int id)
    {
      var usuario = await _context.Usuarios.FindAsync(id);
      if (usuario == null) return NotFound();
      _context.Usuarios.Remove(usuario);
      await _context.SaveChangesAsync();
      return NoContent();
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var usuario = await _context.Usuarios
            .Include(u => u.Rol)
            .FirstOrDefaultAsync(u => u.correo == request.correo && u.contrasena == request.contrasena);

        if (usuario == null)
        {
            return Unauthorized(new { message = "Correo o contraseña incorrectos." });
        }

        var token = GenerateJwtToken(usuario);

        return Ok(new
        {
            token,
            usuario.id,
            usuario.nombre,
            usuario.correo,
            usuario.rol_id,
            Rol = usuario.Rol?.nombre
        });
    }

  }
}