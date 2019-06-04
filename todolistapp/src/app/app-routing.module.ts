import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaComponent } from './tarefa/tarefa.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'tarefas', component: TarefaComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
