import { Component, effect, inject, model, ModelSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { LoadingService } from '../../../shared/services/loading.service';
import { AuthService } from '../../../shared/services/auth.service';
import { ToastService } from '../../../shared/services/toast.service';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-register',
  imports: [
    InputText,
    FloatLabel,
    ReactiveFormsModule,
    PasswordModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private loadingService = inject(LoadingService);
  private authService = inject(AuthService);
  private formBuild = inject(FormBuilder);
  private toastService = inject(ToastService);
  public isSave: ModelSignal<boolean> = model.required();
  public form!: FormGroup;
  public isRegister: ModelSignal<boolean> = model.required();

  constructor() {
    this.form = this.formBuild.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirm: [null, [Validators.required]]
    })

    effect(() => {
      const shouldSave = this.isSave();

      if (!shouldSave) return;

      this.isSave.set(false);

      this.register();
    });
  }

  private register() {
    const { password, confirm } = this.form.value;
    if (password !== confirm) {
      return this.toastService.showToastError('As senhas não coincidem');
    }
    this.loadingService.show()
    this.authService.register(this.form.value)
      .then((res) => {
        console.log(res)
        this.toastService.showToastSuccess('Usuário cadastrado com sucesso!')
        this.isRegister.set(true)
      })
      .catch((err) => {
        console.log(err)
        this.toastService.showToastError('Erro ao cadastrar usuário!')
      })
      .finally(() => {
        this.loadingService.hide()
      })
  }
}
