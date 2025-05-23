using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSC.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ControllerProductos : ControllerBase
  {
    private readonly AppDbContext _context;

    public ControllerProductos(AppDbContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Producto>>> GetProductos()
    {
      return await _context.Productos.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Producto>> GetProducto(int id)
    {
      var producto = await _context.Productos.FindAsync(id);
      if (producto == null) return NotFound();
      return producto;
    }
    [HttpPost]
    public async Task<ActionResult<Producto>> CreateProducto(Producto producto)
    {
      _context.Productos.Add(producto);
      await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetProducto), new { id = producto.id }, producto);
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProducto(int id, Producto producto)
    {
      if (id != producto.id) return BadRequest();
      _context.Entry(producto).State = EntityState.Modified;
      await _context.SaveChangesAsync();
      return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProducto(int id)
    {
      var producto = await _context.Productos.FindAsync(id);
      if (producto == null) return NotFound();
      _context.Productos.Remove(producto);
      await _context.SaveChangesAsync();
      return NoContent();
    }
  }
}