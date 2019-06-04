import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service'
import { Tarefa } from '../models/tarefa';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tarefas: Tarefa[];
  
  constructor( private tarefasService: TarefaService ) { }

  ngOnInit() {
    this.getTarefas();
  }

  getTarefas(): void {
    this.tarefasService.getTarefas().subscribe(tarefaz => this.tarefas = tarefaz.slice(1, 5));
  }

}
