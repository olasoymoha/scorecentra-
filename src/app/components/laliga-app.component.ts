import { Component } from '@angular/core';
import { MaterialModule } from '../modules/material/material.module';

@Component({
  selector: 'app-laliga-app',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './laliga-app.component.html',
  styleUrl: './laliga-app.component.css'
})
export class LaligaAppComponent {

  irNoticia(url: string) {
    window.open(url, "_blank")
  }

}
