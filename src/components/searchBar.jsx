import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import "./searchBar.css";

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: ["name", "keywords"],
        threshold: 0.3,
        minMatchCharLength: 1,
      }),
    [data]
  );

  useEffect(() => {
    if (query.trim()) {
      const searchResults = fuse.search(query).map((res) => res.item);
      console.log("🔍 Query:", query, "➡️ Results:", searchResults);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  const handleSelect = (path) => {
    setQuery("");
    setResults([]);
    setActiveIndex(-1);
    if (path) navigate(path);
  };

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setResults([]);
      setActiveIndex(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSelect(results[activeIndex].path);
    }
  };

  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const highlightMatch = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="search-wrapper position-relative" ref={wrapperRef}>
      <input
        type="text"
        id="searchProducts"
        name="searchProducts"
        placeholder="Search Products..."
        autoComplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="form-control"
      />

      {query && (
        <ul className="search-dropdown list-group shadow-sm" role="listbox">
          {results.length > 0 ? (
            results.map((item, index) => (
              <li
                key={item.id || index}
                className={`list-group-item list-group-item-action ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleSelect(item.path)}
                style={{ cursor: "pointer" }}
                role="option"
              >
                {highlightMatch(item.name)}
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
