using System;
using System.Collections.Generic;
using System.Linq;
using ApiEducacao.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiEducacao.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurmaController : ControllerBase
    {
        private readonly EducacaoContext _contexto;

        public TurmaController(EducacaoContext contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Turma>> GetTurma()
        {
            try
            {
                return _contexto.Turmas.Include(t => t.Escola).ToList();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Turma> GetTurma(int id)
        {
            try
            {
                var turma = _contexto.Turmas.Include(t => t.Escola).Where(t => t.IdTurma == id).SingleOrDefault();

                if (turma == null)
                    return NotFound();

                return turma;
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpPost]
        public ActionResult<Turma> PostTurma([FromBody] Turma turma)
        {
            try
            {
                if (turma == null)
                    return NoContent();
                if (turma.Escola == null)
                    return BadRequest();

                _contexto.Turmas.Add(turma);
                _contexto.Entry(turma.Escola).State = EntityState.Detached;
                _contexto.SaveChanges();

                return CreatedAtAction("GetTurma", new { id = turma.IdTurma }, turma);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpPut("{id}")]
        public ActionResult<Turma> PutTurma(int id, [FromBody] Turma turma)
        {
            try
            {
                if (turma == null || turma.Escola == null)
                    return BadRequest();

                if (turma.IdTurma <= 0)
                    turma.IdTurma = id;

                _contexto.Turmas.Update(turma);
                _contexto.Entry(turma.Escola).State = EntityState.Detached;
                _contexto.SaveChanges();

                return turma;
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Turma> DeleteTurma(int id)
        {
            try
            {
                var turma = _contexto.Turmas.Find(id);

                if (turma == null)
                    return BadRequest();

                _contexto.Turmas.Remove(turma);
                _contexto.SaveChanges();

                return turma;
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }
    }
}