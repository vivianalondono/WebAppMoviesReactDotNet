import { NavLink } from "react-router-dom";

export default function Menu(){
    const activeClass = "active";

    return(
        <nav className= "navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" activeClassName={activeClass} to="/">React Películas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <NavLink className="nav-link" activeClassName={activeClass} to="/genders">
                                Géneros
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" activeClassName={activeClass} to="/movies/filter">
                                Filtrar Películas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" activeClassName={activeClass} to="/actors">
                                Actores
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" activeClassName={activeClass} to="/cinemas">
                                Cines
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" activeClassName={activeClass} to="/movies/create">
                                Crear Peliculas
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}