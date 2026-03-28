import { Component, effect, inject, model, ModelSignal } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component'
import { Router } from '@angular/router';
import { DatePicker } from 'primeng/datepicker'
@Component({
  selector: 'app-form-capsule',
  imports: [HeaderComponent, DatePicker],
  templateUrl: './form-capsule.component.html',
  styleUrl: './form-capsule.component.scss',
})
export class FormCapsuleComponent {
  public onBack: ModelSignal<boolean> = model(false)
  private router = inject(Router);

  constructor() {
    effect(() => {
      if(this.onBack()) {
        this.router.navigate(['./'])
        this.onBack.set(false)
      }
    })
  }

    onUpload(event: any): void{
    // const file = event.target.files[0];
    // const allowedTypes =['image/png', 'image/jpeg', 'image/jpg','image/gif']
    // if(file && allowedTypes.includes(file.type)){
    //   event.targetvalue = file;
    // // if(file){
    //   this.projectForm.patchValue({
    //     file: file
    //   });
    //   if(this.viewInfoProjeto)
    //     this.updateImageProjeto()
    //   this.projectForm.get('file')?.updateValueAndValidity();

    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     this.imagePreview = reader.result;
    //   };
    //   reader.readAsDataURL(file);
    // }
    // else {
    //   this.sharedService.showToastError('Arquivo não permitido! Por favor selecione uma imagem válida!')
    //   event.target.value =''
    //   }
  }
}
