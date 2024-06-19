export interface Equipo {
    SeasonTeamId: number;
    SeasonId: number;
    TeamId: number;
    TeamName: string;
    Active: boolean;
    Gender: string;
    Type: string;
    Team: {
        TeamId: number;
        AreaId: number;
        VenueId: number;
        Key: string;
        Name: string;
        FullName: string;
        Active: boolean;
        AreaName: string;
        VenueName: string;
        Gender: string;
        Type: string;
        Address: string;
        City: string;
        Zip: string;
        Phone: string;
        Fax: string;
        Website: string;
        Email: string;
        Founded: number;
        ClubColor1: string;
        ClubColor2: string;
        ClubColor3: string;
        Nickname1: string;
        Nickname2: string;
        Nickname3: string;
        WikipediaLogoUrl: string;
        WikipediaWordMarkUrl: string | null;
        GlobalTeamId: number;
    };
}
