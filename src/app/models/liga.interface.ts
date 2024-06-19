export interface Liga {
    CompetitionId: number;
    AreaId: number;
    AreaName: string;
    Name: string;
    Gender: string;
    Type: string;
    Format: string;
    Key: string;
    Seasons: Temporada[];
}

export interface Temporada {
    SeasonId: number;
    CompetitionId: number;
    Season: number;
    Name: string;
    CompetitionName: string;
    StartDate: string;
    EndDate: string;
    CurrentSeason: boolean;
    Rounds: Ronda[];
}

export interface Ronda {
    RoundId: number;
    SeasonId: number;
    Season: number;
    SeasonType: number;
    Name: string;
    Type: string;
    StartDate: string;
    EndDate: string;
    CurrentWeek: number;
    CurrentRound: boolean;
    Games: any[];
    Standings: any[];
    TeamSeasons: any[];
    PlayerSeasons: any[];
}
