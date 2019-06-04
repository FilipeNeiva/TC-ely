import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarefa } from './models/tarefa';
import { TAREFAS } from './mock-tarefas';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  constructor() { }

  getTarefas(): Observable<Tarefa[]>{
    return of(TAREFAS);
  }
}
