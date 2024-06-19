import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  private apiUrl = 'https://api.sportsdata.io/v4/soccer/scores/json/Competitions';
  private apiKey = 'd9a5f2c124704032a63ebf626a29c580'

  constructor(private http: HttpClient) { }

  getAllLigas(): Observable<any> {
    return this.http.get(`${this.apiUrl}?key=${this.apiKey}`).pipe(
      map((data: any) => {
        return data.filter((
          competition: { AreaName: string; Name: string; Seasons: any }) =>
          competition.AreaName === 'Spain' &&
          competition.Name === 'Primera Division'
        );
      })
    )
  }
}
