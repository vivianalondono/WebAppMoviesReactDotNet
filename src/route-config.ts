import Actors from "./actors/Actors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import Cinemas from "./cinemas/Cinemas";
import CreateCinema from "./cinemas/CreateCinema";
import EditCinema from "./cinemas/EditCinema";
import CreateGender from "./genders/CreteGender";
import EditGender from "./genders/EditGender";
import Genders from "./genders/Genders";
import LandingPage from "./LandingPage";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import RedirectToLanding from "./utils/RedirectToLanding";

const routes = [
    {path: '/genders', component: Genders, exact:true},
    {path: '/genders/create', component: CreateGender},
    {path: '/genders/edit/:id(\\d+)', component: EditGender},

    {path: '/actors', component: Actors, exact:true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id(\\d+)', component: EditActor},

    {path: '/cinemas', component: Cinemas, exact:true},
    {path: '/cinemas/create', component: CreateCinema},
    {path: '/cinemas/edit/:id(\\d+)', component: EditCinema},

    {path: '/movies/filter', component: FilterMovies},
    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie},

    {path: '/', component: LandingPage, exact:true},
    {path: '*', component: RedirectToLanding},

];

export default routes;