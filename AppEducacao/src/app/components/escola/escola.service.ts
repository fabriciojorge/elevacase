import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Escola } from './escola.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  baseApiUrl = "http://localhost:5000/api/escola";

  constructor(private http: HttpClient) { }

  buscarEscolas(): Observable<Escola[]> {
    return this.http.get<Escola[]>(this.baseApiUrl).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  buscarEscolaPorId(id: number): Observable<Escola> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.get<Escola>(url).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  criarEscola(escola: Escola): Observable<Escola> {
    escola = this.removeFormatacaoMascara(escola);
    return this.http.post<Escola>(this.baseApiUrl, escola).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  atualizarEscola(escola: Escola): Observable<Escola> {
    escola = this.removeFormatacaoMascara(escola);
    const url = `${this.baseApiUrl}/${escola.idEscola}`;
        return this.http.put<Escola>(url, escola).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  excluirEscola(escola: Escola): Observable<Escola> {
    const url = `${this.baseApiUrl}/${escola.idEscola}`;
    return this.http.delete<Escola>(url).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  removeFormatacaoMascara(escola: Escola): Escola {
    let novaEscola: Escola;
    novaEscola = {
      bairro: escola.bairro,
      cep: escola.cep.replace(/\D/g, ''),
      cnpj: escola.cnpj.replace(/\D/g, ''),
      logradouro: escola.logradouro,
      nome: escola.nome,
      numero: escola.numero,
      idEscola: escola.idEscola
    };

    return novaEscola;
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
     alert(msg);    
  }
}