using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
public class Rol
{
    [Key]
    public int id { get; set; }
    public string nombre { get; set; }
}
