import { Component, InputSignal, input, effect, ModelSignal, model, OutputEmitterRef, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public icon: InputSignal<string> = input.required()
  public title: InputSignal<string> = input.required()
  public image: ModelSignal<string | undefined> = model()
  public eventClick: ModelSignal<boolean> = model(false)
  constructor() {
    effect(() => {
      this.icon()
      this.title()
      if(!this.image()) {
        this.image.set('./public/favicon.ico')
      }
    })
  }

  onEvent() {
    this.eventClick.set(true)
  }
}
