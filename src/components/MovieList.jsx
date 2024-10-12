import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../stylesheets/MovieList.css";
import Movie from "./Movie";
import { useState } from "react";

export default function MovieList({ movieList }) {
  const [toggle, setToggle] = useState(true);

  console.log(toggle);
  return (
    <div className="container">
      <div className="togglebtn d-flex justify-content-end ">
        <button onClick={(e) => setToggle(!toggle)}>
          {toggle ? <span>-</span> : <span>+</span>}
        </button>
      </div>
      <div className="">
        {toggle ? (
          <ul>
            {movieList.map((e) => (
              <Movie movie={e} key={e.Id}></Movie>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
