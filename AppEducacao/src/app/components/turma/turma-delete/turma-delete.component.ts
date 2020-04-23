import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../turma.service';
import { Turma } from '../turma.model';
import { InfoPaginaService } from '../../template/info-pagina/info-pagina.service';

@Component({
  selector: 'app-turma-delete',
  templateUrl: './turma-delete.component.html',
  styleUrls: ['./turma-delete.component.css']
})
export class TurmaDeleteComponent implements OnInit {

  turma: Turma = {
    anoLetivo: '',
    codTurma: '',
    disciplina: '',
    escola: {
      bairro: '',
      cep: '',
      cnpj: '',
      logradouro: '',
      nome: '',
      numero: null
    },
    nomeProfessor: '',
    turno: ''
  };

  constructor(private turmaService: TurmaService, private router: Router, private rota: ActivatedRoute, private infoPaginaService: InfoPaginaService) {
    infoPaginaService.headerData = {
      title: 'Excluir Turma',
      icon: 'fas fa-users'
    }
  }

  ngOnInit(): void {
    const id = +this.rota.snapshot.paramMap.get('id');

    if (id > 0) {
      this.turmaService.buscarTurmaPorId(id).subscribe((turma) => {
        this.turma = turma;
      });
    }
  }

  excluirEscola(): void {
    if (!confirm('Confirma a exclusão da turma?'))
      return;

    this.turmaService.excluirTurma(this.turma).subscribe(() => {
      alert('Turma excluída com sucesso');
      this.redireciona();
    });
  }

  redireciona(): void {
    this.router.navigate(['/turmas/read']);
  }
}