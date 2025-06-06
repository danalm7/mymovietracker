import { useState } from "react";
import MovieForm from "./MovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=TU_API_KEY&s=${query}`);
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error al buscar películas", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">THE MOVIE TRACKER</aside>
      <main className="main-content">
        <MovieForm onSearch={fetchMovies} />
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <strong>{movie.Title}</strong> ({movie.Year})<br />
                <img src={movie.Poster !== "N/A" ? movie.Poster : ""} alt={movie.Title} width="100" />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
