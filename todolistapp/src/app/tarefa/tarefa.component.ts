import { Component, OnInit } from '@angular/core';
import { TAREFAS } from '../mock-tarefas';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tarefas = TAREFAS

  constructor() { }

  ngOnInit() {
  }

}
