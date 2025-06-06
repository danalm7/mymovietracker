import { useState } from "react";

function MovieForm({ addMovie }) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !year) return;

    addMovie({ name, year, watched: false });
    setName("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Película"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Año"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default MovieForm;
