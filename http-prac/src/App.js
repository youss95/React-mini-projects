import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //hoisting 으로 인해 useEffect 다음 으로 선언해주어야 함
  const fetchMovie = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-test-9dce8-default-rtdb.firebaseio.com/movies.json"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("error!!!!");
      }
      const data = await response.json();
      console.log(data);
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addHandler = async (movie) => {
    const response = await fetch(
      "https://react-test-9dce8-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify({ id: 1, title: "hah2", openingText: "d2" }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(response);
    const data = await response.json();
    console.log("d", data);
  };

  useEffect(() => {
    console.log("s");
    fetchMovie();
  }, [fetchMovie]);

  let content = <p>no movies found</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovie}>Fetch Movies</button>
        <button onClick={addHandler}>addTest</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
