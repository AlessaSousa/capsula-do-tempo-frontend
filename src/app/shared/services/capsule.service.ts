import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CapsuleService {
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  public getCapsules() {
    return lastValueFrom(this.http.get(`${environment.apiUrl}/capsule`));
  }

  public createCapsule(form: FormData) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/capsule`, form))
  }
}
