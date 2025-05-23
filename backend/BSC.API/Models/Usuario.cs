using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
public class Usuario
{
    [Key]
    public int id { get; set; }
    public string nombre { get; set; }
    public string correo { get; set; }
    public string contrasena { get; set; }

    [ForeignKey("Rol")]
    public int rol_id { get; set; }

    public Rol Rol { get; set; }
}
