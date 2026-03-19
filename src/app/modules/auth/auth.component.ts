import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
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
  stateOptions: any[] = [
    { label: 'Login', value: 'login' }, 
    { label: 'Register', value: 'register' }];

  value: string = 'login';
}
