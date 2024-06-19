import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../../services/jugadores.service';
import { MaterialModule } from '../../../modules/material/material.module';

interface JugadorGoles {
  name: string;
  totalGoles: number;
  team: string;
  imageUrl: string;
}

interface JugadorAsistencias {
  name: string;
  totalAsistencias: number;
  team: string;
  imageUrl: string;
}

@Component({
  selector: 'app-top',
  standalone: true,
  templateUrl: './top.component.html',
  imports: [MaterialModule],
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  listGoleadores: JugadorGoles[] = [];
  listAsistidores: JugadorAsistencias[] = [];

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.getTopGoleadores();
    this.getTopAsistidores();
  }

  getTopAsistidores() {
    this.jugadoresService.getJugadores().subscribe((data: any) => {
      const top5Jugadores: JugadorAsistencias[] = [];

      data.forEach((entry: { PlayerSeasons: any[]; }) => {
        entry.PlayerSeasons.forEach((playerSeason: { PlayerId: number; Assists: number; Name: string; Team: string }, index: number) => {
          const playerId = playerSeason.PlayerId;
          const roundedAssists = Math.round(playerSeason.Assists);

          const jugador: JugadorAsistencias = {
            name: playerSeason.Name,
            totalAsistencias: roundedAssists,
            team: playerSeason.Team,
            imageUrl: '' // Inicializa la propiedad imageUrl
          };

          top5Jugadores.push(jugador);
        });
      });

      console.log(data);


      const sortedTop5Jugadores = top5Jugadores.sort((a, b) => b.totalAsistencias - a.totalAsistencias);
      this.listAsistidores = sortedTop5Jugadores.slice(0, 5);

      // console.log(this.listAsistidores);

      this.listAsistidores[0].imageUrl = 'https://thekoptimes.com/wp-content/uploads/2022/12/villarreal-cf-v-ud-almeria-laliga-santander-1-768x512.jpg';
      this.listAsistidores[1].imageUrl = 'https://d3nfwcxd527z59.cloudfront.net/content/uploads/2021/08/10095042/Nico-Williams-Athletic-Bilbao.jpg';
      this.listAsistidores[2].imageUrl = 'https://getfootballnewsspain.com/wp-content/uploads/2023/11/fbl-esp-liga-girona-almeria-1.jpg';
      this.listAsistidores[3].imageUrl = 'https://th.bing.com/th/id/R.8718a69ab6a83b0807868bd9d00e795c?rik=N0ieZAywQtjwtQ&riu=http%3a%2f%2fwww.laregion.es%2fmedia%2flaregion%2fimages%2f2018%2f04%2f18%2f2018041821494958793.jpg&ehk=kGH5BNPd%2b9uVge%2bsfqL3BTSeollIJa2TMdRB9hgXtlc%3d&risl=&pid=ImgRaw&r=0';
      this.listAsistidores[4].imageUrl = 'https://www.planetsport.com/image-library/square/1200/t/tonikroos-09may2021.jpg';

    });
  }

  getTopGoleadores() {
    this.jugadoresService.getJugadores().subscribe((data: any) => {
      const top5Jugadores: JugadorGoles[] = [];

      data.forEach((entry: { PlayerSeasons: any[]; }) => {
        entry.PlayerSeasons.forEach((playerSeason: { PlayerId: number; Goals: number; Name: string; Team: string }, index: number) => {
          const playerId = playerSeason.PlayerId;
          const roundedGoals = Math.round(playerSeason.Goals);

          const jugador: JugadorGoles = {
            name: playerSeason.Name,
            totalGoles: roundedGoals,
            team: playerSeason.Team,
            imageUrl: '' // Inicializa la propiedad imageUrl
          };


          top5Jugadores.push(jugador);
        });
      });

      const sortedTop5Jugadores = top5Jugadores.sort((a, b) => b.totalGoles - a.totalGoles);
      this.listGoleadores = sortedTop5Jugadores.slice(0, 5);

      // console.log(this.listGoleadores);

      this.listGoleadores[0].imageUrl = 'https://www.sportsgoal.com.ng/wp-content/uploads/2024/01/artem-dovbyk-girona-cf-celebrates-867704271-cpryPs.jpeg';
      this.listGoleadores[1].imageUrl = 'https://villarrealcf.es/wp-content/uploads/2023/08/sor.jpg';
      this.listGoleadores[2].imageUrl = 'https://i2-prod.irishmirror.ie/incoming/article30856113.ece/ALTERNATES/s615/1_GettyImages-1655137419.jpg';
      this.listGoleadores[3].imageUrl = 'https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/htTXZbjSPDCh3uDxF0GOToowuTQ=/800x0/filters:format(jpg):quality(70):focal(1152x709:1162x719)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/7GVKBH2X6QATVJ3GNXRMUMZ33U.jpg';
      this.listGoleadores[4].imageUrl = 'https://th.bing.com/th/id/R.4a14eb9318b01158377de1e4f19e78a8?rik=2k6fLCLhT%2fMLWQ&pid=ImgRaw&r=0';

    });
  }
}
