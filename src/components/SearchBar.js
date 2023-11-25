import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(term);
  }

  function handleChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} placeholder="Buscar productos..." />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default SearchBar;