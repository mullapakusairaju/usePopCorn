import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../stylesheets/Navbar.css";
export default function Navbar({ movieList }) {
  const num = movieList.length;

  return (
    <div className="  nav-bar">
      <h3 id="nav-title" className="text-center">
        🍿 usePopcorn
      </h3>
      <input
        type="text"
        placeholder="Search Movies"
        className="search-box text-start"
      />
      <h3 className="text-center">Found {num} results</h3>
    </div>
  );
}
