import { Link } from "react-router-dom";

export default function Cinemas(){
    return(
        <>
            <h3>Indice de cines..</h3>
            <Link to="cinemas/create">Crear Cine</Link>
        </>
    )
}