import React from 'react';

const api_img = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
      return "green";
  } else if (vote >= 6) {
      return "orange";
  } else {
      return "red";
  }
}

const Movie = ({title, poster_path, overview, vote_average}) => {
  return (
    <div className="movie">
      <img src={
            poster_path 
              ? api_img + poster_path 
              : "https://images.wallpaperscraft.com/image/words_inscription_director_171532_1366x768.jpg"} 
            alt={title }/>

      <div className="movie-info">
        <h3>{title}</h3>

        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;