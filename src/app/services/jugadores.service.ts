import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private apiUrl = 'https://api.sportsdata.io/v4/soccer/stats/json/PlayerSeasonStats/ESP/2024';
  private apiKey = 'd9a5f2c124704032a63ebf626a29c580'
  constructor(private http: HttpClient) { }

  getJugadores() {
    return this.http.get(`${this.apiUrl}?key=${this.apiKey}`);
  }

  getJugador(id: number) {
    return this.http.get(`${this.apiUrl}/${id}?key=${this.apiKey}`);
  }
  
}
