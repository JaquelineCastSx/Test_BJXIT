using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
public class Producto
{
    [Key]
    public int id { get; set; }
    public string clave_producto { get; set; }
    public string nombre { get; set; }
    public int existencias { get; set; }
}
