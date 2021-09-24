export interface movie{
    id: number,
    tittle: string,
    poster: string
}

export interface landingPageDTO {
    inTheater?: movie[];
    upcoming?: movie[];
}