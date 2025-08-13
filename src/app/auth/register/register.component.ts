import { Component, inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  public registerForm: FormGroup;

  constructor() {
    this.registerForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, EmailValidator]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    })
  }

  register() {
    // adicionar loading
    this.authService.register(this.registerForm.value)
    .then((res) => {
      console.log("Usuário cadastrado com sucesso.", res)
    })
    .catch((err) => {
      console.log('Erro ao cadastrar usuário', err)
    })
    .finally(() => {
      // finalizar loading
    })
  }

}
