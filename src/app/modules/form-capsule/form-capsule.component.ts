import { Component, effect, inject, model, ModelSignal, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { DatePicker } from 'primeng/datepicker'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { ToastService } from '../../shared/services/toast.service';
@Component({
  selector: 'app-form-capsule',
  imports: [
    DatePicker,
    FormsModule,
    Button,
    ReactiveFormsModule
  ],
  templateUrl: './form-capsule.component.html',
  styleUrl: './form-capsule.component.scss',
})
export class FormCapsuleComponent {
  private router = inject(Router);
  private toastService = inject(ToastService)
  private formBuilder = inject(FormBuilder)
  public onBack: ModelSignal<boolean> = model(false)

  protected date = new Date();
  protected imgPreview: WritableSignal<string | ArrayBuffer | null> = signal(null);
  protected hora = 0;
  protected form!: FormGroup

  constructor() {
    effect(() => {
      if (this.onBack()) {
        this.router.navigate(['./'])
        this.onBack.set(false)
      }
    })
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      mensagem: [null, [Validators.required]],
      date: [new Date()],
      hour: [new Date()]
    })
  }

  protected onUpload(event: any): void {
    const file = event.target.files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']
    if (file && allowedTypes.includes(file.type)) {
      event.targetvalue = file;
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imgPreview.set(reader.result);
        };
        reader.readAsDataURL(file);
      }
      else {
        this.toastService.showToastError('Arquivo não permitido! Por favor selecione uma imagem válida!')
        event.target.value = ''
      }
    }
  }

  protected removeImg() {
    this.imgPreview.set(null)
  }

  protected combinarDataHora() {
    const { date, hour } = this.form.value;

    if (!date || !hour) return null;

    const datetime = new Date(`${date}T${hour}`);

    return datetime;
  }

  protected onSubmit() {
    const formulario = {
      ...this.form.value,
      img: this.imgPreview(),
      data: this.combinarDataHora()
    }

    console.log('cápsula', formulario)
  }
}
