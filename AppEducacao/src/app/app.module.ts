import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EscolaReadComponent } from './components/escola/escola-read/escola-read.component';
import { EscolaCreateComponent } from './components/escola/escola-create/escola-create.component';
import { EscolaDeleteComponent } from './components/escola/escola-delete/escola-delete.component';
import { TurmaReadComponent } from './components/turma/turma-read/turma-read.component';
import { TurmaDeleteComponent } from './components/turma/turma-delete/turma-delete.component';
import { TurmaCreateComponent } from './components/turma/turma-create/turma-create.component';
import { InfoPaginaComponent } from './components/template/info-pagina/info-pagina.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EscolaReadComponent,
    TurmaReadComponent,
    EscolaCreateComponent,
    EscolaDeleteComponent,
    TurmaDeleteComponent,
    TurmaCreateComponent,
    InfoPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
