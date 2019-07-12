import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  error: any;

  constructor(private authService: AuthService, private router: Router,) { }

  ngOnInit() {
  }

  signup(username: string, email: string, password1: string, password2: string) {
    this.authService.signup(username, email, password1, password2).subscribe(
      success => this.router.navigate(['tarefas']),
      error => this.error = error
    );
  }

}
