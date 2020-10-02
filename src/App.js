import React, { useEffect, useState } from 'react';

import Movie from './components/movies';

const api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const api_search =  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(api_url);
  }, []);

  const getMovies = (api) => { 
    fetch(api)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(api_search+searchTerm);
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search"
            placeholder="Type something.."
            type="search"
            value={searchTerm}
            onChange={handleOnChange}
           />
        </form>
      </header>

      <div className="movie-container">
        {movies.length > 0 && 
          movies.map((movie) =>
          <Movie key={movie.id} {...movie} />
        )}
      </div>
    </>
  );
}

export default App;
