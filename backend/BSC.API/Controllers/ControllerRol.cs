using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSC.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ControllerRoles : ControllerBase
  {
    private readonly AppDbContext _context;
    public ControllerRoles(AppDbContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Rol>>> GetRoles()
    {
      return await _context.Roles.ToListAsync();
    }

  }
}