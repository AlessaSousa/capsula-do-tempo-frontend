import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-splash',
  imports: [
    ButtonModule
  ],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss',
})
export class SplashComponent {
  private router = inject(Router);

  protected goToPage() {
    this.router.navigate(['/auth'])
  }
}
