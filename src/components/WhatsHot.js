import React, { useEffect, useState } from "react";

const WhatsHot = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        Accept: "application/json",
      },
    });

    const json = await data.json();
    console.log(json.results);
    setMovies(json.results);
  }

  const movieData = movies.map((movie) => {
    return (
      <div className="movieCard">
        <img className="moviePoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
        <h5 className="movieRating">{movie.vote_average}</h5>
        <h3 className="movieTitle">{movie.title}</h3>
      </div>
    );
  });

  return <div className="gridContainer">{movieData}</div>;
};

export default WhatsHot;
