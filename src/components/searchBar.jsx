import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.css";

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredData = data.filter((item) =>
  item.name.toLowerCase().includes(query.toLowerCase()) ||
  item.keywords.some((kw) => kw.toLowerCase().includes(query.toLowerCase()))
);

  const handleSelect = (path) => {
    setQuery(""); // clear search
    navigate(path); // redirect to product detail page
  };

  return (
    <div className="search-wrapper position-relative">
      <input
        type="text"
        placeholder="Search Products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control"
      />
      {query && (
        <ul className="search-dropdown list-group">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li
                key={item.id}
                className="list-group-item list-group-item-action"
                onClick={() => handleSelect(item.path)}
                style={{ cursor: "pointer" }}
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
