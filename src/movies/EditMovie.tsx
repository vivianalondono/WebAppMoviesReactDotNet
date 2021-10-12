import { ActorMovieDTO } from "../actors/actors.model";
import { genderDTO } from "../genders/genders.model";
import FormMovies from "./FormMovies";

export default function EditMovie(){
    const gendersSelected: genderDTO[] = [{id:1, name:'Accion'}];
    const gendersNoSelected: genderDTO[] = [{id:2, name:'Drama'}, {id:3, name:'Comedia'}];

    const cinemasSelected: genderDTO[] = [{id:3, name:'Sambil'}];
    const cinemasNoSelected: genderDTO[] = [{id:1, name:'Agora'}, {id:2, name:'Florida'}];

    const actorsSelected: ActorMovieDTO[] = [
        {
            id: 1, name: 'Tom Hollan', character: '', photo: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/FFEN3WRTYRH3TE3CIBEWSZRUKI.jpg'
        }
    ];


    return(
        <>
            <h3>Editar pelicula</h3>
            <FormMovies
                actorsSelected={actorsSelected}
                gendersNoSelected={gendersNoSelected}
                gendersSelected={gendersSelected}
                cinemasNoSelected={cinemasNoSelected}
                cinemasSelected={cinemasSelected}
                model= {{tittle:'Spiderman', inCinema:true, trailer:'url',
                releaseDate: new Date('2019-01-01T00:00:00') }}
                onSubmit={values => console.log(values)} />
        </>
    )
}