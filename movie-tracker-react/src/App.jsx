import { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const toggleWatched = (index) => {
    const updated = [...movies];
    updated[index].watched = !updated[index].watched;
    setMovies(updated);
  };

  const deleteMovie = (index) => {
    const updated = movies.filter((_, i) => i !== index);
    setMovies(updated);
  };

  return (
    <div className="container">
      <h1>🎬 Movie Tracker</h1>
      <MovieForm addMovie={addMovie} />
      <MovieList
        movies={movies}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;
