import { InfoPaginaService } from './../../template/info-pagina/info-pagina.service';
import { EscolaService } from './../../escola/escola.service';
import { Escola } from './../../escola/escola.model';
import { TurmaService } from './../turma.service';
import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turma-create',
  templateUrl: './turma-create.component.html',
  styleUrls: ['./turma-create.component.css']
})
export class TurmaCreateComponent implements OnInit {

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
  escolas: Escola[];

  constructor(private turmaService: TurmaService, private escolaService: EscolaService, private router: Router,
    private rota: ActivatedRoute, private infoPaginaService: InfoPaginaService) {
    infoPaginaService.headerData = {
      title: 'Cadastrar Turma',
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

    this.escolaService.buscarEscolas().subscribe((escolas) => {
      this.escolas = escolas;
    });
  }

  salvar(): void {
    const id = +this.rota.snapshot.paramMap.get('id');

    if (!confirm('Confirma os dados para salvar?'))
      return;

    if (id < 1)
      this.criarTurma();
    else
      this.alterarTurma();
  }

  criarTurma(): void {
    this.turmaService.criarTurma(this.turma).subscribe(() => {
      alert('Turma criada com sucesso');
      this.redireciona();
    });
  }

  alterarTurma(): void {
    this.turmaService.atualizarTurma(this.turma).subscribe(() => {
      alert('Turma atualizada com sucesso');
      this.redireciona();
    });
  }

  redireciona(): void {
    this.limpaObjetos();
    this.router.navigate(['/turmas/read']);
  }

  limpaObjetos(): void {
    this.turma = null;
    this.escolas = null;
  }
}