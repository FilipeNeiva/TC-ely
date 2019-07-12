import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.service';
import { AtividadeService } from 'src/app/services/atividade.service';
import { Atividade } from 'src/app/models/atividade';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  private id: number;
  tarefa: Tarefa;
  atividades: Atividade[];
  errorTarefa: any;
  errorAtividade: any;

  constructor(private route: ActivatedRoute, private api: TarefaService, private apiAtividade: AtividadeService) { 
    this.id = +this.route.snapshot.paramMap.get('id');
    this.api.getTarefa(this.id).subscribe(
      (tarefa: Tarefa) => this.tarefa = tarefa,
      (error: any) => this.errorTarefa = error
    )

    this.atividades = new Array;

    this.apiAtividade.getAtividades().subscribe(
      (items: Atividade[]) => items.forEach(item => {
        if(item.tarefa == this.id){
          this.atividades.push(item)
        }
      }),
      (error: any) => this.errorAtividade = error
    );
    
  }

  ngOnInit() {

    
  }

  add(nome: string, descricao: string){
    this.apiAtividade.createAtividade(nome, descricao, this.id).subscribe(
      (item: Atividade) => this.atividades.push(item)
    )
  }

}
