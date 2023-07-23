import React, { useEffect, useState } from "react";

const NewRelease = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        Accept: "application/json",
      },
    });

    const json = await data.json();
    console.log(json.results);
    setMovies(json.results);
  }

  const movieElements = movies.map((movie, index) => {
    return (
      <div className="movieElement">
        <div className="imageContainer">
          <img
            className="backdropImage"
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          />
        </div>

        <div className="movieAndImage">
          <img
            className="posterImage"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          />

          <div className="movieInfo">
            <h1 className="movieInfoTitle">{movie.original_title}</h1>
            <h3 className="movieInfoRating">{movie.vote_average} &#11088;</h3>
            <h2 className="movieOverview">{movie.overview}</h2>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="newReleases">
        <h2 className="newReleasesTitle">New Releases</h2>
      </div>
      <div className="movieElements">{movieElements}</div>
    </>
  );
};

export default NewRelease;
