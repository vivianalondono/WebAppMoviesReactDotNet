import { Link } from "react-router-dom";

export default function Genders(){
    return(
        <>
            <h3>Indice de géneros..</h3>
            <Link to="genders/create">Crear género</Link>
        </>
    )
}