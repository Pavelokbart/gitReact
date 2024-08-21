import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavoutiresPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;
