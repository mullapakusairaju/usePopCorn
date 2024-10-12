import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";

function App() {
  const movieList = [
    {
      Id: 1,
      Title: "DeadPool",
      Date: "2020-09-12",
      img: "https://thumbs.dreamstime.com/b/logo-deadpool-black-background-d-comic-hero-marvel-vector-illustration-144205291.jpg",
    },
    {
      Id: 2,
      Title: "365 Days",
      Date: "2020-09-12",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVYOpbpPYBKKLGmdib61vLeTkUenmlC_8m0MHSsOswXdnJ7a6fgQTLwQG9P0bwa0PL_8&usqp=CAU",
    },

    {
      Id: 3,
      Title: "Dilwale Dulhania Le Jayenge",
      Date: "2020-09-12",
      img: "https://thumbs.dreamstime.com/b/logo-deadpool-black-background-d-comic-hero-marvel-vector-illustration-144205291.jpg",
    },
    {
      Id: 4,
      Title: "365 Days",
      Date: "2020-09-12",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVYOpbpPYBKKLGmdib61vLeTkUenmlC_8m0MHSsOswXdnJ7a6fgQTLwQG9P0bwa0PL_8&usqp=CAU",
    },
  ];

  return (
    <div className="usepopcornApp">
      <Navbar movieList={movieList}></Navbar>
      <MainBody movieList={movieList}></MainBody>
    </div>
  );
}

export default App;
