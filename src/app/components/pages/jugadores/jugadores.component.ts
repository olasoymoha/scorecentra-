import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';
import { JugadoresService } from '../../../services/jugadores.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit, AfterViewInit {
  listJugadores = [];

  displayedColumns: string[] = ['Name', 'Team', 'Games', 'Goals', 'Assists', 'Minutes', 'YellowCards', 'RedCards'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private jugadoresService: JugadoresService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllJugadores();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllJugadores() {
    this.jugadoresService.getJugadores().subscribe((data: any) => {
      if (data && data.length > 0) {
        this.listJugadores = data[0].PlayerSeasons.map((jugador: any) => {
          return {
            ...jugador,
            Games: Math.round(jugador.Games),
            Goals: Math.round(jugador.Goals),
            Assists: Math.round(jugador.Assists),
            Minutes: Math.round(jugador.Minutes),
            YellowCards: Math.round(jugador.YellowCards),
            RedCards: Math.round(jugador.RedCards)
          };
        });
        this.dataSource.data = this.listJugadores;
      }
      console.log(this.listJugadores);
    });
  }
}
