import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../stylesheets/Movie.css";

export default function Movie({ movie }) {
  return (
    <div className="container mb-3 d-flex movie-card ">
      <div>
        <img src={movie.Poster} alt={movie.Title} width={70} />
      </div>
      <div>
        <p className="m-0">{movie.Title}</p>
        <span>🗓️ {movie.Year}</span>
      </div>
    </div>
  );
}
