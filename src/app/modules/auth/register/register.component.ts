import { Component, effect, inject, model, ModelSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { LoadingService } from '../../../shared/services/loading.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    InputText,
    FloatLabel,
    ReactiveFormsModule
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private loadingService = inject(LoadingService);
  private authService = inject(AuthService);
  private formBuild = inject(FormBuilder);

  // TODO: ADICIONAR TOAST 

  // private toastService = inject(ToastService)
  public isSave: ModelSignal<boolean> = model.required();
  public form!: FormGroup;

  constructor() {
    this.form = this.formBuild.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      confirmSenha: [null, [Validators.required]]
    })

    effect(() => {
      if (this.isSave()) {
        this.register()
        console.log('is save', this.isSave())
      }
    })
  }

  private register() {
    this.loadingService.show()
    this.authService.register(this.form.value)
    .then((res) => {
      console.log(res)
      alert('Cadastrado com sucesso!')
      this.isSave.set(false);
    })
    .catch((err) => {
      console.log(err)
      alert('Erro ao cadastrar usuário!')
    })
    .finally(() => this.loadingService.hide())
  }
}
