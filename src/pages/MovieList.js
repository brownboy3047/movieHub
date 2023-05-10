import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

import MovieCard from "../components/MovieCard";

const MovieList = ({ apiPath, title }) => {
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=c4eb6b6bf725dbe21c0c6dc69c303117&language=en-US&page=1`;

  const { data, isLoading, error } = useFetch(url);

  const movies = data.results;
  // console.log(data);

  // updating dynamic page title
  useEffect(() => {
    document.title = `${title} / movieHub`;
  }, [title]);

  return (
    <main>
      {error && <div className="text-center text-red-700">{error}</div>}

      {isLoading ? (
        <div className="text-center text-green-700"> Loading...</div>
      ) : (
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies &&
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </section>
      )}
    </main>
  );
};

export default MovieList;
