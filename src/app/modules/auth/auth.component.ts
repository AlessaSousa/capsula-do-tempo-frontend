import { Component, effect, inject, model, signal } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  imports: [
    LoginComponent,
    RegisterComponent,
    SelectButton,
    FormsModule,
    Button
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  private router = inject(Router)

  stateOptions: any[] = [
    { label: 'Login', value: 'login' },
    { label: 'Register', value: 'register' }];

  value: string = 'login';

  public isSave = model(false);
  public isRegister = model(false);

  constructor() {
    effect(() => {
      this.isSave()
     
      if(this.isRegister()){
        this.value = 'login'
      } else {
        this.isRegister.set(false);
      }
    })
  }

  save() {
    this.isSave.set(true)
  }
}
