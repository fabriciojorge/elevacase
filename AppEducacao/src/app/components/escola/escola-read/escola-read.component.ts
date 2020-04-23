import { Component, OnInit } from '@angular/core';
import { Escola } from '../escola.model';
import { EscolaService } from './../escola.service';
import { InfoPaginaService } from '../../template/info-pagina/info-pagina.service';

@Component({
  selector: 'app-escola-read',
  templateUrl: './escola-read.component.html',
  styleUrls: ['./escola-read.component.css']
})
export class EscolaReadComponent implements OnInit {

  escolas: Escola[];

  constructor(private escalaService: EscolaService, private infoPaginaService: InfoPaginaService) {
    infoPaginaService.headerData = {
      title: 'Lista de Escolas',
      icon: 'fas fa-school'
    }
  }

  ngOnInit(): void {
    this.escalaService.buscarEscolas().subscribe((escolas) => {
      this.escolas = escolas;
    });
  }

  public formatarCnpj(cnpj: string): string {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }
}