using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSC.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ControllerPedidos : ControllerBase
  {
    private readonly AppDbContext _context;

    public ControllerPedidos(AppDbContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Pedido>>> GetPedidos()
    {
      return await _context.Pedidos.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Pedido>> GetPedido(int id)
    {
      var pedido = await _context.Pedidos.FindAsync(id);
      if (pedido == null) return NotFound();
      return pedido;
    }
    [HttpPost]
    public async Task<ActionResult<Pedido>> CreatePedido(Pedido pedido)
    {
      _context.Pedidos.Add(pedido);
      await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetPedido), new { id = pedido.id }, pedido);
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePedido(int id, Pedido pedido)
    {
      if (id != pedido.id) return BadRequest();
      _context.Entry(pedido).State = EntityState.Modified;
      await _context.SaveChangesAsync();
      return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePedido(int id)
    {
      var pedido = await _context.Pedidos.FindAsync(id);
      if (pedido == null) return NotFound();
      _context.Pedidos.Remove(pedido);
      await _context.SaveChangesAsync();
      return NoContent();
    }
    [HttpGet("detalles/{id}")]
    public async Task<ActionResult<IEnumerable<DetallePedido>>> GetDetallesPedido(int id)
    {
      var detalles = await _context.DetallesPedido.Where(d => d.pedido_id == id).ToListAsync();
      if (detalles == null || detalles.Count == 0) return NotFound();
      return detalles;
    }

    [HttpPost("detalles")]
    public async Task<ActionResult<DetallePedido>> CreateDetallePedido(DetallePedido detalle)
    {
      _context.DetallesPedido.Add(detalle);
      await _context.SaveChangesAsync();
      return CreatedAtAction(nameof(GetDetallesPedido), new { id = detalle.pedido_id }, detalle);
    }
  }
}