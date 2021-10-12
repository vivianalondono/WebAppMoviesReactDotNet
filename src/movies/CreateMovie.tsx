import { cinemaDTO } from "../cinemas/cinemas.modal";
import { genderDTO } from "../genders/genders.model";
import FormMovies from "./FormMovies";

export default function CreateMovie(){
    const genders: genderDTO[] = [{id:1, name:'Accion'}, {id:2, name:'Drama'}, {id:3, name:'Comedia'}];
    const cinemas: cinemaDTO[] = [{id:1, name:'Agora'}, {id:2, name:'Florida'}, {id:3, name:'Sambil'}];

    return(
        <>
            <h3>Crear pelicula</h3>
            <FormMovies
                actorsSelected={[]}
                gendersNoSelected={genders}
                gendersSelected={[]}
                cinemasNoSelected={cinemas}
                cinemasSelected={[]}
                model= {{tittle:'', inCinema:false, trailer:''}}
                onSubmit={values => console.log(values)} />
        </>
    )
}