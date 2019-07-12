import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AuthGuard } from './services/auth.service';

const routes: Routes = [
  {path: '', redirectTo: '/tarefas', pathMatch: 'full'},
  {path: 'tarefa/:id', component: AtividadeComponent, canActivate: [AuthGuard]},
  {path: 'tarefas', component: TarefaComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
