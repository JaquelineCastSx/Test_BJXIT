using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
public class Pedido
{
    [Key]
    public int id { get; set; }
    [ForeignKey("Usuario")]
    public int usuario_id { get; set; }
    public string nombre_cliente { get; set; }
    public DateTime fecha { get; set; }

}
