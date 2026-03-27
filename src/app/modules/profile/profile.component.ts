import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { LoadingService } from '../../shared/services/loading.service';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-profile',
  imports: [
    Button
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  private loadingService = inject(LoadingService);
  private authService = inject(AuthService);
  private formBuild = inject(FormBuilder);
  private toastService = inject(ToastService);
  
  logout() {
    // this.loadingService.show()
    // this.authService.logout()
    // .then((res) => {
    //   this.toastService.showToastSuccess("Desconectado com sucesso!")
    // })
    // .catch((err) => {
    //   this.toastService.showToastError("Erro ao desconectar!")
    // })
    // .finally(() => this.loadingService.hide())
  }

}
