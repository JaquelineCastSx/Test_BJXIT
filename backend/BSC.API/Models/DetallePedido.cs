using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class DetallePedido
{
    [Key]
    public int id { get; set; }

    [ForeignKey("Pedido")]
    public int pedido_id { get; set; }

    [ForeignKey("Producto")]
    public int producto_id { get; set; }

    public int cantidad { get; set; }
}
