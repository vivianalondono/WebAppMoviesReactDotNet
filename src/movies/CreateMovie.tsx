import { genderDTO } from "../genders/genders.model";
import FormMovies from "./FormMovies";

export default function CreateMovie(){
    const genders: genderDTO[] = [{id:1, name:'Accion'}, {id:2, name:'Drama'}, {id:3, name:'Comedia'}];
    return(
        <>
            <h3>Crear pelicula</h3>
            <FormMovies
                gendersNoSelected={genders}
                gendersSelected={[]}
                model= {{tittle:'', inCinema:false, trailer:''}}
                onSubmit={values => console.log(values)} />
        </>
    )
}