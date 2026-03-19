import { Component } from '@angular/core';
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

}
