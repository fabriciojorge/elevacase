import { Escola } from './../escola.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EscolaService } from '../escola.service';
import { InfoPaginaService } from '../../template/info-pagina/info-pagina.service';

@Component({
  selector: 'app-escola-create',
  templateUrl: './escola-create.component.html',
  styleUrls: ['./escola-create.component.css']
})
export class EscolaCreateComponent implements OnInit {

  escola: Escola = {
    nome: '',
    logradouro: '',
    numero: null,
    bairro: '',
    cep: '',
    cnpj: '',
  };

  public maskCEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  public maskCNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private escolaService: EscolaService, private router: Router, private rota: ActivatedRoute, private infoPaginaService: InfoPaginaService) {
    infoPaginaService.headerData = {
      title: 'Cadastrar Escola',
      icon: 'fas fa-school'
    }
  }

  ngOnInit(): void {
    const id = +this.rota.snapshot.paramMap.get('id');

    if (id > 0) {
      this.escolaService.buscarEscolaPorId(id).subscribe((escola) => {
        this.escola = escola;
      });
    }
  }

  salvar(): void {
    const id = +this.rota.snapshot.paramMap.get('id');

    if (!confirm('Confirma os dados para salvar?'))
      return;

    if (id < 1)
      this.criarEscola();
    else
      this.alterarEscola();
  }

  criarEscola(): void {
    this.escolaService.criarEscola(this.escola).subscribe(() => {
      alert('Escola criada com sucesso');
      this.redireciona();
    });
  }

  alterarEscola(): void {
    this.escolaService.atualizarEscola(this.escola).subscribe(() => {
      alert('Escola atualizada com sucesso');
      this.redireciona();
    });
  }

  redireciona(): void {
    this.router.navigate(['/escolas/read']);
  }
}