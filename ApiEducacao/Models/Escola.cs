using System.ComponentModel.DataAnnotations;

namespace ApiEducacao.Models
{
    public class Escola
    {
        [Key]
        public int IdEscola { get; set; }
        public string Nome { get; set; }
        public string Logradouro { get; set; }
        public int Numero { get; set; }
        public string Bairro { get; set; }
        public string Cep { get; set; }
        public string Cnpj { get; set; }
    }
}