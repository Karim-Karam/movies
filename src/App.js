import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Movieslist from "./components/Movieslist";
import Searchbar from "./components/Searchbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Moviesdetails from "./components/Moviesdetails";

function App() {
  const [movies, setmovies] = useState([]);

  const getAllmovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=46a30e7e9b069d41071b00fc25455377&&language=ar"
    );
    setmovies(res.data.results);
  };

  const getpage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=46a30e7e9b069d41071b00fc25455377&&language=ar&&page=${page}`
    );
    setmovies(res.data.results);
  };

  useEffect(() => {
    getAllmovies();
  }, []);

  const search = async (word) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=46a30e7e9b069d41071b00fc25455377&&query=${word}&&language=ar`
    );
    setmovies(res.data.results);
  };

  return (
    <div>
      <Searchbar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Movieslist movies={movies} getpage={getpage} />}
            />
            <Route path="/movie/:id" element={<Moviesdetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
