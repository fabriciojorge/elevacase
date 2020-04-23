import { Component, OnInit } from '@angular/core';
import { Escola } from '../escola.model';
import { EscolaService } from '../escola.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoPaginaService } from '../../template/info-pagina/info-pagina.service';

@Component({
  selector: 'app-escola-delete',
  templateUrl: './escola-delete.component.html',
  styleUrls: ['./escola-delete.component.css']
})
export class EscolaDeleteComponent implements OnInit {

  escola: Escola = {
    nome: '',
    logradouro: '',
    numero: null,
    bairro: '',
    cep: '',
    cnpj: '',
  }

  public maskCEP = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  public maskCNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  
  constructor(private escolaService: EscolaService, private router: Router, private rota: ActivatedRoute, private infoPaginaService: InfoPaginaService) {
    infoPaginaService.headerData = {
      title: 'Excluir Escola',
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

  excluirEscola(): void {
    if (!confirm('Confirma a exclusão dos dados?'))
      return;

    this.escolaService.excluirEscola(this.escola).subscribe(() => {
      alert('Escola excluída com sucesso');
      this.redireciona();
    });
  }

  redireciona(): void {
    this.router.navigate(['/escolas/read']);
  }
}