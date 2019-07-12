import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getAtividades(){
    return this.http.get(this.apiRoot.concat('atividade/'));
  }

  createAtividade(nome: string, descricao: string, tarefa: number){
    return this.http.post(
      this.apiRoot.concat('atividade/'),
      { nome, descricao, tarefa }
    );
  }

  deleteAtividade(id: number) {
    return this.http.delete(this.apiRoot.concat(`atividade/${id}/`));
  }

}
