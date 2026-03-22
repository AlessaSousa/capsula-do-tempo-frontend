import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { lastValueFrom, map, tap } from 'rxjs';
import { environment } from '../../environments/environments';
import { IUser } from '../models/IUser';

interface AuthResponse {
  access_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  public isLogged = signal(!!localStorage.getItem('isLogged'));

  constructor() { }

  login(data: Partial<IUser>) {
    return lastValueFrom(
      this.http.post<AuthResponse>(
        `${environment.apiURL}/auth/login`,
        data
      )
    ).then(res => {
      console.log('token', res)
      localStorage.setItem('tokenCapsula', res.access_token);
      return res;
    });
  }


  // TODO: ALTERAR MÉTODO

  register(data: IUser) {
    return lastValueFrom(
      this.http.post<AuthResponse>(
        `${environment.apiURL}/auth/register`,
        data
      )
    ).then(res => {
      console.log('token', res)
      localStorage.setItem('tokenCapsula', res.access_token);
      return res;
    });
  }


  logout() {
    return lastValueFrom(
      this.http.post(`${environment.apiURL}/auth/logout`, {}, {
        withCredentials: true,
        responseType: 'text'
      })
    ).then(res => {
      localStorage.removeItem('isLogged');
      this.isLogged.set(false);
      return res;
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLogged') === 'true';
  }
}
