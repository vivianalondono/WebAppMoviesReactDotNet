import { genderDTO } from "../genders/genders.model";
import FormMovies from "./FormMovies";

export default function EditMovie(){
    const gendersSelected: genderDTO[] = [{id:1, name:'Accion'}];
    const gendersNoSelected: genderDTO[] = [{id:2, name:'Drama'}, {id:3, name:'Comedia'}];

    return(
        <>
            <h3>Editar pelicula</h3>
            <FormMovies
                gendersNoSelected={gendersNoSelected}
                gendersSelected={gendersSelected}
                model= {{tittle:'Spiderman', inCinema:true, trailer:'url',
                releaseDate: new Date('2019-01-01T00:00:00') }}
                onSubmit={values => console.log(values)} />
        </>
    )
}