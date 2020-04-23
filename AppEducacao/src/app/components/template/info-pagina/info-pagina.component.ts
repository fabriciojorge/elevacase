import { InfoPaginaService } from './info-pagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-pagina',
  templateUrl: './info-pagina.component.html',
  styleUrls: ['./info-pagina.component.css']
})
export class InfoPaginaComponent implements OnInit {

  constructor(private infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.infoPaginaService.headerData.title;
  }

  get icon(): string {
    return this.infoPaginaService.headerData.icon;
  }
}