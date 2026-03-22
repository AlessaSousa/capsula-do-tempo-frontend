import { Component, effect, inject, model, ModelSignal } from '@angular/core';
import { InputText } from 'primeng/inputtext'
import { FloatLabel } from 'primeng/floatlabel';
import { LoadingService } from '../../../shared/services/loading.service';
import { AuthService } from '../../../shared/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../../shared/services/toast.service';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [
    InputText,
    FloatLabel,
    ReactiveFormsModule,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private loadingService = inject(LoadingService);
  private authService = inject(AuthService);
  private formBuild = inject(FormBuilder);
  private toastService = inject(ToastService);
  private router = inject(Router);

  public isSave: ModelSignal<boolean> = model.required();
  public form!: FormGroup;

  constructor() {
    this.form = this.formBuild.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })

    effect(() => {
      const shouldSave = this.isSave();

      if (!shouldSave) return;

      this.isSave.set(false);

      this.login();
    });
  }

  private login() {
    this.loadingService.show()
    this.authService.login(this.form.value)
      .then((res) => {
        console.log(res)
        this.toastService.showToastSuccess('Login feito com sucesso!')
        this.router.navigate(['/home'])
      })
      .catch((err) => {
        console.log(err)
        this.toastService.showToastError('Erro ao fazer login!')
      })
      .finally(() => {
        this.loadingService.hide()
        this.isSave.set(false);
      })
  }
}
