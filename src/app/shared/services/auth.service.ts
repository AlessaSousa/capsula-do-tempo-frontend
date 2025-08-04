import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

export const TOKEN = 'token';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private http: HttpClient = inject(HttpClient);
  private messageService: MessageService = inject(MessageService);
  private router: Router = inject(Router);
  constructor() { }

  public login(form: FormData) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/auth/login`, form));
  }

  public register(form: FormData) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/auth/register`, form));
  }

  public getAuthToken() {
    return localStorage.getItem(TOKEN);
  }

  public logout() {
    localStorage.removeItem(TOKEN);
    this.router.navigate(['/login'])
  }
}

