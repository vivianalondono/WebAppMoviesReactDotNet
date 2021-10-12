import { ActorMovieDTO } from "../actors/actors.model";

export interface movie{
    id: number,
    tittle: string,
    poster: string
}

export interface movieCreationDTO {
    tittle: string;
    inCinema: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterUrl?: string;
    gendersIds?: number[];
    cinemasIds?: number[];
    actores?:ActorMovieDTO[];
}

export interface landingPageDTO {
    inTheater?: movie[];
    upcoming?: movie[];
}