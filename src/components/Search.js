import { useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "./Products";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    searchProducts(e.target.value);
  };

  const searchProducts = (query) => {
    const filteredResults = Products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="Search by title..."
          value={query}
          onChange={handleInputChange}
        />
      </form>
      <ul className="search-results">
        {results.map((result) => (
          <li key={result.id}>
            <Link to={`/details/${result.id}`}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;