import Library from "./components/pages/Library";
import MoviePreview from "./components/pages/MoviePreview";
import SeriesPreview from "./components/pages/SeriesPreview";

export const ROUTES = {
  library: {
    url: "/",
    text: "Library",
    component: Library
  },
  series: {
    url: "/series/:id",
    text: "Series",
    component: SeriesPreview
  },
  season: {
    url: "/series/:id/:season",
    text: "Season",
    component: null
  },
  episode: {
    url: "/series/:id/:season/:episode",
    text: "Episode",
    component: null
  },
  movie: {
    url: "/movie/:id",
    text: "Movie",
    component: MoviePreview
  }
};
