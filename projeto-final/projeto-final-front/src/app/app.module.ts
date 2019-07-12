import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TarefaService} from './services/tarefa.service'
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AuthService, AuthGuard, AuthInterceptor } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AtividadeComponent,
    TarefaComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TarefaService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
