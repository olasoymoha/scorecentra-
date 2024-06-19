import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Equipo } from '../models/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  private apiUrl = 'https://api.sportsdata.io/v4/soccer/scores/json/SeasonTeams/ESP/275';
  private apiKey = 'd9a5f2c124704032a63ebf626a29c580';
  private equipos: Equipo[] = [];

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.apiUrl}?key=${this.apiKey}`).pipe(
      map((data: any) => {
        this.equipos = data;
        return data;
      })
    );
  }

  getEquipoById(id: number): Observable<Equipo | undefined> {
    return this.getEquipos().pipe(
      map(equipos => equipos.find(equipo => equipo.TeamId === id))
    );
  }
}
