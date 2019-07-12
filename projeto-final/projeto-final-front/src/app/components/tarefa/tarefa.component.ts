import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  items: Tarefa[];
  error: any;

  constructor(private router: Router,private authService: AuthService, private api: TarefaService) {
    this.api.getTarefas().subscribe(
      (items: Tarefa[]) => this.items = items,
      (error: any) => this.error = error
    );
  }

  ngOnInit() {
  }

  add(itemTitulo: string, itemPrazo: Date){
    this.api.createTarefa(itemTitulo, itemPrazo).subscribe(
      (item: Tarefa) => this.items.push(item)
    );
  }

  delete(id: number){
    this.api.deleteTarefa(id).subscribe(
      (success: any) => this.items.slice(
        this.items.findIndex(item => item.id === id)
      )
    );
    location.reload()
  }

  sair(){
    this.authService.logout();
    location.reload()
  }

}
