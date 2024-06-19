import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navbarItems = [
    { title: 'Noticias', url: '/noticias' },
    { title: 'Equipos', url: '/equipos' },
    { title: 'TOP Jugadores', url: '/top' },
    { title: 'Jugadores', url: '/jugadores' },
  ]

}
