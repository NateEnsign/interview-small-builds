import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import GoalsApp from "./components/goals-app/GoalsApp";
import PlacesVisited from "./components/countries-app/PlacesVisited";
import PeaksClimbed from "./components/peaks-app/PeaksClimbed";
import BooksRead from "./components/book-app/BooksRead";
import TopMovies from "./components/movie-app/TopMovies";
import LandingPage from "./pages/LandingPage";
import Chores from "./components/toDo-app/Chores";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/movies" element={<TopMovies />} />
        <Route path="/books" element={<BooksRead />} />
        <Route path="/peaks" element={<PeaksClimbed />} />
        <Route path="/places" element={<PlacesVisited />} />
        <Route path="/goals" element={<GoalsApp />} />
        <Route path='/chores' element={<Chores />} />
      </Routes>
    </Router>
  );
}

export default App;


