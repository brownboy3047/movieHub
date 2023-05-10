import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

import MovieCard from "../components/MovieCard";

const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=c4eb6b6bf725dbe21c0c6dc69c303117&language=en-US&query=${queryTerm}`;

  const { data, isLoading, error } = useFetch(url);

  const movies = data.results;

  //updating dynamic page title
  useEffect(() => {
    document.title = `Search Result for ${queryTerm} / movieHub`;
  });

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies && movies.length === 0
            ? `No result found for '${queryTerm.toUpperCase()}'`
            : `Result for '${queryTerm.toUpperCase()}'`}
        </p>
      </section>

      {isLoading ? (
        <div className="text-center text-lg text-green-700"> Loading...</div>
      ) : (
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies &&
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </section>
      )}

      {error && <div className="text-center text-lg text-red-700">{error}</div>}
    </main>
  );
};

export default Search;
