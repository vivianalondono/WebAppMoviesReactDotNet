import { movie } from "./movies.model";
import css from './IndividualMovie.module.css';

export default function IndividualMovie(props: individualMovieProps){
    const buildLink = () => ` /movie/${props.movie.id}`
    return (
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.movie.poster} alt="Poster" />
            </a>
            <p>
                <a href={buildLink()}>{props.movie.tittle}</a>
            </p>
        </div>
    )
}

interface individualMovieProps{
    movie:movie;
}