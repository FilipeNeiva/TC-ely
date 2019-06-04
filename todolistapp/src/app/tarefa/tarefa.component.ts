import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa';
import { TarefaService } from '../tarefa.service'

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  selectedTarefa: Tarefa;
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.getTarefas();
  }

  onSelect(tarefa: Tarefa): void {
    this.selectedTarefa = tarefa;
  }

  getTarefas(): void {
    this.tarefaService.getTarefas().subscribe(tarefaz => this.tarefas = tarefaz);
  }

}
