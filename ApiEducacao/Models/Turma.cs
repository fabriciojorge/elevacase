using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiEducacao.Models
{
    public class Turma
    {
        [Key]
        public int IdTurma { get; set; }
        public string CodTurma { get; set; }
        public string AnoLetivo { get; set; }
        public string Disciplina { get; set; }
        public string NomeProfessor { get; set; }
        public string Turno { get; set; }
        [ForeignKey("IdEscola")]
        public virtual Escola Escola { get; set; }
    }
}