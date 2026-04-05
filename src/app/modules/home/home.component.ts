import { Component, signal, WritableSignal } from '@angular/core';
import { ICapsule } from '../../shared/models/ICapsule';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    DatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  listCapsules: WritableSignal<ICapsule[] | undefined> = signal([])

  constructor() {
    this.listCapsules.set(
      [
        {
          title: 'Mensagem para meu futuro',
          message: 'Espero que você esteja feliz e realizado com suas escolhas.',
          date: new Date('2026-12-31T23:59:00')
        },
        {
          title: 'Metas de carreira',
          message: 'Quero estar trabalhando com tecnologia e evoluindo constantemente.',
          date: new Date('2027-06-15T09:00:00')
        },
        {
          title: 'Carta motivacional',
          message: 'Nunca esqueça o motivo pelo qual você começou.',
          date: new Date('2026-09-01T08:30:00')
        },
        {
          title: 'Recordações importantes',
          message: 'Lembre-se das pessoas que estiveram ao seu lado nessa fase.',
          date: new Date('2028-01-01T00:00:00')
        },
        {
          title: 'Objetivos pessoais',
          message: 'Viajar mais, cuidar da saúde e aprender coisas novas.',
          date: new Date('2026-11-20T18:45:00')
        }
      ]
    )
  }
}
