import { TurmaService } from './../turma.service';
import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma.model';
import { InfoPaginaService } from '../../template/info-pagina/info-pagina.service';

@Component({
  selector: 'app-turma-read',
  templateUrl: './turma-read.component.html',
  styleUrls: ['./turma-read.component.css']
})
export class TurmaReadComponent implements OnInit {

  turmas: Turma[];

  constructor(private turmaService: TurmaService, private infoPaginaService: InfoPaginaService) {
    infoPaginaService.headerData = {
      title: 'Lista de Turmas',
      icon: 'fas fa-users'
    }
  }

  ngOnInit(): void {
    this.turmaService.buscarTurmas().subscribe((turmas) => {
      this.turmas = turmas;
    })
  }
}