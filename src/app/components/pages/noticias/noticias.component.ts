import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';
import { listNoticia } from '../../../data/noticias.data';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { tablaLigaSantander } from '../../../data/tabla.data';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit, AfterViewInit {
  tablaligaSantander = tablaLigaSantander;
  listNoticia = listNoticia;

  displayedColumns: string[] = ['posicion', 'equipo', 'partidosJugados', 'victorias', 'empates', 'derrotas', 'golesAFavor', 'golesEnContra', 'diferenciaDeGoles', 'puntos'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getInfoLigaSantander();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getInfoLigaSantander(): void {
    this.dataSource.data = this.tablaligaSantander;
  }

  irNoticia(url: string): void {
    this.router.navigate(['noticia/' + url]);
  }
}