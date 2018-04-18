import { Component } from '@angular/core';

@Component({
  selector: 'dash-system',
  templateUrl: './system.component.html'
})
export class SystemComponent {
  menuItems: any[] = [
    { text: 'Главная', url: '/main', type: 'url', shape: 'dashboard', class: 'is-solid' },
    { text: 'Защита', url: '/main', type: 'url', shape: 'shield', class: 'is-solid' },
    { text: 'Блоки', url: '/main', type: 'url', shape: 'block', class: '' },
    { text: 'Главная', url: '/main', type: 'heading' },
    { text: 'Скорость', url: '/main', type: 'url', shape: 'bolt', class: 'is-solid' }
  ];

  // tslint:disable-next-line:no-inferrable-types
  sidebarMini: boolean = false;
}
