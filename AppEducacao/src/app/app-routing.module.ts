import { TurmaDeleteComponent } from './components/turma/turma-delete/turma-delete.component';
import { EscolaDeleteComponent } from './components/escola/escola-delete/escola-delete.component';
import { TurmaReadComponent } from './components/turma/turma-read/turma-read.component';
import { EscolaReadComponent } from './components/escola/escola-read/escola-read.component';
import { TurmaCreateComponent } from './components/turma/turma-create/turma-create.component';
import { EscolaCreateComponent } from './components/escola/escola-create/escola-create.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "escolas/read",
    component: EscolaReadComponent
  },
  {
    path: "escolas/create",
    component: EscolaCreateComponent
  },
  {
    path: "escolas/create/:id",
    component: EscolaCreateComponent
  },
  {
    path: "escolas/delete/:id",
    component: EscolaDeleteComponent
  },
  {
    path: "turmas/read",
    component: TurmaReadComponent
  },
  {
    path: "turmas/create",
    component: TurmaCreateComponent
  },
  {
    path: "turmas/create/:id",
    component: TurmaCreateComponent
  },
  {
    path: "turmas/delete/:id",
    component: TurmaDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
