import { Component, effect, inject, model, ModelSignal } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-capsule',
  imports: [HeaderComponent],
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
}
