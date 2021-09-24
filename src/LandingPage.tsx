import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";

export default function LandingPage(){

    const [movies, setMovies] = useState<landingPageDTO>({})

  useEffect( () => {
    const timerId = setTimeout(() => {
      setMovies(
        {
          inTheater: [
            {
              id: 1, tittle: 'Spider-man Far from home',
              poster: 'https://i2.wp.com/omglobalnews.com/wp-content/uploads/2019/01/spider-man-far-from-home-poster-1153868_yqdt.jpg?fit=809%2C1199&ssl=1'
            },
            {
              id: 2, tittle: 'Moana',
              poster: 'https://m.media-amazon.com/images/I/615sOgj+FmL._AC_.jpg'
            }
          ],
          upcoming: [
            {
              id: 3, tittle: 'Soul',
              poster: 'https://m.media-amazon.com/images/I/71Cpdkzc-TL._AC_SY679_.jpg'
            },
            {
              id: 4, tittle: 'Black Widow',
              poster: 'https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SY679_.jpg'
            }
          ]
        }
      )
    }, 500);

    return () => clearTimeout(timerId);
  }) 
    return(
        <>
            <h3>En cartelera</h3>
            <MoviesList movies={movies.inTheater} />

            <h3>Próximos estrenos</h3>
            <MoviesList movies={movies.upcoming} />
        </>
    )
}