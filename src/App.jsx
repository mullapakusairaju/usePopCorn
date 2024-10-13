import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import { useEffect } from "react";
import { useState } from "react";

const key = "c8e68cef";
const Query = "interstellar";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function getMovies() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${Query}`
          );

          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await res.json();
          if (data.Search) {
            setMovieList(data.Search);
          }
        } catch (error) {
          console.error(error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      getMovies();
    },

    []
  );

  return (
    <div className="usepopcornApp">
      <Navbar movieList={movieList}></Navbar>
      <MainBody
        movieList={movieList}
        isLoading={isLoading}
        error={error}
      ></MainBody>
    </div>
  );
}
export default App;
