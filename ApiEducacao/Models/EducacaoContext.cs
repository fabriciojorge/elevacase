using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiEducacao.Models
{
    public class EducacaoContext : DbContext
    {
        public EducacaoContext(DbContextOptions<EducacaoContext> options) : base(options)
        {
        }

        public DbSet<Escola> Escolas { get; set; }
        public DbSet<Turma> Turmas { get; set; }
    }
}