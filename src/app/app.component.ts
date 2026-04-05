import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast'
import { LoadingComponent } from './shared/components/loading/loading.component';
import { IS_MOBILE } from './shared/services/is-mobile.service';
import { NavBarComponent } from './shared/layout/nav-bar/nav-bar.component';
import { HeaderComponent } from './shared/layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToastModule,
    LoadingComponent,
    NavBarComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ChronoBox';
  private router = inject(Router);
  public isMobile = inject(IS_MOBILE);
  public showNavBar = signal(false);
  public showHeader = signal(false);

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavBar.set(['/home', '/profile', '/form_capsula'].includes(event.urlAfterRedirects))
        this.showHeader.set(['/home', '/profile', '/form_capsula'].includes(event.urlAfterRedirects))
      }
    })
  }
}
