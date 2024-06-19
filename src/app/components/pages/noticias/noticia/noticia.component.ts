import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../../models/noticia.interface';
import { listNoticia } from '../../../../data/noticias.data';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MaterialModule } from '../../../../modules/material/material.module';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit {

  noticia: Noticia | undefined;
  listNoticia = listNoticia;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const noticiaId = +params['id'];

      if (noticiaId) {
        this.getNoticia(noticiaId);
      }
    });
  }

  getNoticia(id: number): void {
    this.noticia = this.listNoticia.find(noticia => noticia.id === id) as Noticia;
    console.log(this.noticia);
  }

  volver() {
    this.router.navigate(['/noticias']);
  }



}
