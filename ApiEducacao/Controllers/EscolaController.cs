using System;
using System.Collections.Generic;
using System.Linq;
using ApiEducacao.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiEducacao.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EscolaController : ControllerBase
    {
        private readonly EducacaoContext _contexto;

        public EscolaController(EducacaoContext contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Escola>> GetEscola()
        {
            try
            {
                return _contexto.Escolas.ToList();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Escola> GetEscola(int id)
        {
            try
            {
                var escola = _contexto.Escolas.Find(id);

                if (escola == null)
                    return NotFound();

                return escola;
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpPost]
        public ActionResult<Escola> PostEscola([FromBody] Escola escola)
        {
            try
            {
                if (escola == null)
                    return NoContent();

                _contexto.Escolas.Add(escola);
                _contexto.SaveChanges();

                return CreatedAtAction("GetEscola", new { id = escola.IdEscola }, escola);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpPut("{id}")]
        public ActionResult<Escola> PutEscola(int id, [FromBody] Escola escola)
        {
            try
            {
                if (escola == null)
                    return BadRequest();

                if (escola.IdEscola <= 0)
                    escola.IdEscola = id;

                _contexto.Escolas.Update(escola);
                _contexto.SaveChanges();

                return escola;
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Escola> DeleteEscola(int id)
        {
            try
            {
                var escola = _contexto.Escolas.Find(id);
                if (escola == null)
                    return BadRequest();

                bool temTurmas = _contexto.Turmas.Where(t => t.Escola.IdEscola == escola.IdEscola).Count() > 0;
                if (temTurmas)
                    return StatusCode(424);

                _contexto.Escolas.Remove(escola);
                _contexto.SaveChanges();

                return escola;
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }
    }
}