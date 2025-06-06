function MovieList({ movies, toggleWatched, deleteMovie }) {
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>
          <span>
            {movie.name} ({movie.year}) {movie.watched ? "✅" : ""}
          </span>
          <div>
            <button onClick={() => toggleWatched(index)}>👁️</button>
            <button onClick={() => deleteMovie(index)}>🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
