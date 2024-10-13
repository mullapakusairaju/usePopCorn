import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../stylesheets/main.css";
import MovieList from "./MovieList";
import Loading from "./Loading";

export default function MainBody({ movieList, isLoading, error }) {
  return (
    <div className="main-body container mt-4">
      <div className="box">
        {isLoading && <Loading></Loading>}
        {!isLoading && !error && <MovieList movieList={movieList}></MovieList>}
        {error && <h3 className="d-flex justify-content-center">{error}</h3>}
      </div>
      <div className="box">
        <MovieList movieList={movieList}></MovieList>
      </div>
    </div>
  );
}
