import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

interface IMenu {
  route: string,
  icon: string,
  label: string
}

@Component({
  selector: 'app-nav-bar',
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  private router = inject(Router);

  protected activeIndex = signal(0);
  protected menuItems: WritableSignal<IMenu[]> = signal([]);

  constructor() {

    effect(() => {
      const currentRoute = this.router.url;
      const index = this.menuItems().findIndex(item => currentRoute.startsWith(item.route));
      this.activeIndex.set(index);
    })

    this.menuItems.set(
      [
        { route: '/home', icon: 'hourglass', label: 'Adicionar' },
        { route: '/home', icon: 'note', label: 'Adicionar' },
        { route: '/home', icon: 'home', label: 'Adicionar' },
        { route: '/form_capsula', icon: 'add', label: 'Adicionar' },
        { route: '/profile', icon: 'people', label: 'Adicionar' }
      ]
    )
  }

  setActive(index: number) {
    this.activeIndex.set(index);
    console.log('index', this.activeIndex())
  }
}
