import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Turma } from './turma.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  baseApiUrl = "http://localhost:5000/api/turma";

  constructor(private http: HttpClient) { }

  buscarTurmas(): Observable<Turma[]> {
    return this.http.get<Turma[]>(this.baseApiUrl).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  buscarTurmaPorId(id: number): Observable<Turma> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.get<Turma>(url).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  criarTurma(turma: Turma): Observable<Turma> {
    return this.http.post<Turma>(this.baseApiUrl, turma).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  atualizarTurma(turma: Turma): Observable<Turma> {
    const url = `${this.baseApiUrl}/${turma.idTurma}`;
    return this.http.put<Turma>(url, turma).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  excluirTurma(turma: Turma): Observable<Turma> {
    const url = `${this.baseApiUrl}/${turma.idTurma}`;
    return this.http.delete<Turma>(url).pipe(map((obj) => obj), catchError((e) => this.errorHandler(e)));
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!');
    return EMPTY;
  }

  showMessage(msg: string): void {
    alert(msg);
  }
}