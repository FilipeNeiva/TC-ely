import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getTarefas(){
    return this.http.get(this.apiRoot.concat('tarefas/'))
  }

  getTarefa(id: number){
    let url = 'tarefas/' + id + '/'
    return this.http.get(this.apiRoot.concat(url))
  }
  createTarefa(titulo: string, prazo: Date) {
    return this.http.post(
      this.apiRoot.concat('tarefas/'),
      { titulo, prazo }
    );
  }

  deleteTarefa(id: number) {
    return this.http.delete(this.apiRoot.concat(`tarefas/${id}/`));
  }
}
