import { Component, model, ModelSignal } from '@angular/core';
import { InputText } from 'primeng/inputtext'
import { FloatLabel } from 'primeng/floatlabel';
@Component({
  selector: 'app-login',
  imports: [
    InputText,
    FloatLabel
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public isSave: ModelSignal<boolean> = model.required();
}
