import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  public signinForm: FormGroup;

  constructor() {
    this.signinForm = this.formBuilder.group({
      email: [null],
      senha: [null]
    })
  }

  public login() {
    // adicionar início do loading
    this.authService.login(this.signinForm.value)
    .then((res) => {
      this.router.navigate(['/home'])
      console.log('Usuário logado com sucesso.')
    })
    .catch((err) => {
      console.log('Usuário ou senha inválidos.')
    })
    .finally(() => {
      // adicionar finalização do loding
    })
  }
}
