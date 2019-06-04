import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Component({
  selector: 'app-tarefa-detalhe',
  templateUrl: './tarefa-detalhe.component.html',
  styleUrls: ['./tarefa-detalhe.component.css']
})
export class TarefaDetalheComponent implements OnInit {

  @Input() tarefa: Tarefa;

  constructor() { }

  ngOnInit() {
  }

}
