import { Component, InputSignal, input, effect, ModelSignal, model, OutputEmitterRef, output, WritableSignal, signal, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

interface IHeader {
  icon: string,
  label: string,
  image?: string,
  route: string
}
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private router = inject(Router)
  private destroyRef = inject(DestroyRef);

  public eventClick: ModelSignal<boolean> = model(false)
  public activeHeader: WritableSignal<IHeader | undefined> = signal(undefined)
  
  protected headerItems: WritableSignal<IHeader[]> = signal([
    { route: '/home', icon: 'menu', label: 'Cápsulas' },
    { route: '/form_capsula', icon: 'menu', label: 'Adicionar Cápsula' },
    { route: '/profile', icon: 'menu', label: 'Perfil' }
  ]);

  constructor() {
   this.listenRouteChanges()
  }

  private listenRouteChanges() {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe((event: NavigationEnd) => {
      const currentRoute = event.urlAfterRedirects;

      const header = this.headerItems()
        .find(item => item.route === currentRoute);

      this.activeHeader.set(header);
    })
  }

  onEvent() {
    this.eventClick.set(true)
  }
}
