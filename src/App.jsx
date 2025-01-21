import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import GoalsApp from "./components/goals-app/GoalsApp";
import ToDo from "./components/to-do-list/toDo";
import PlacesVisited from "./components/countries-app/PlacesVisited";
import PeaksClimbed from "./components/peaks-app/PeaksClimbed";
import BooksRead from "./components/book-app/BooksRead";
import GirlsKissed from "./components/kiss-app/GirlsKissed";
import LandingPage from "./pages/LandingPage";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/girls" element={<GirlsKissed />} />
        <Route path="/books" element={<BooksRead />} />
        <Route path="/peaks" element={<PeaksClimbed />} />
        <Route path="/places" element={<PlacesVisited />} />
        <Route path="/goals" element={<GoalsApp />} />
        <Route path="/chores" element={<ToDo />} />
      </Routes>
    </Router>
  );
}

export default App;


