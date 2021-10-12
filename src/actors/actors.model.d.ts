export interface actorCreationDTO {
    name: string;
    birthDate?: Date;
    photo?: File;
    photoURL?:string;
    biography?:string;
}

export interface ActorMovieDTO{
    id: number;
    name: string;
    character: string;
    photo: string;
}