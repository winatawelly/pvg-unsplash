import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";
import Search from "./pages/search";

import { LikedContext } from "./contexts/LikedContext";
import Liked from "./pages/liked";

const App = () => {
  const likedData: [] = JSON.parse(localStorage.getItem("liked") || "[]");
  const [liked, setLiked] = React.useState(likedData);
  const value = { liked, setLiked };

  React.useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  return (
    <BrowserRouter>
      <LikedContext.Provider value={value}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </LikedContext.Provider>
    </BrowserRouter>
  );
};

export default App;
