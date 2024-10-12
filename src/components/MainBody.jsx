import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../stylesheets/main.css";
import MovieList from "./MovieList";

export default function MainBody({ movieList }) {
  return (
    <div className="main-body container mt-4">
      <div className="box">
        <MovieList movieList={movieList}></MovieList>
      </div>
      <div className="box">
        <MovieList movieList={movieList}></MovieList>
      </div>
    </div>
  );
}
