import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Study from "./pages/Study.jsx";
import Photography from "./pages/Photography.jsx";
import NotFound from "./pages/NotFound";
import MovieApp from "./pages/Project/MovieApp";
import Syiva from "./pages/Spesials/Syiva";
import TodoApp from "./pages/Project/TodoApp";
import Instagram from "./pages/Project/Instagram";
import Discord from "./pages/Project/DiscordJs";
import RamBank from "./pages/Project/RamBank";
import Music from "./pages/Music";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="my-camera" element={<Photography />} />
          <Route path="study" element={<Study />} />
          <Route path="music" element={<Music />} />
          <Route path="movie-app" element={<MovieApp />} />
          <Route path="project-ig" element={<Instagram />} />
          <Route path="project-todo" element={<TodoApp />} />
          <Route path="project-discord" element={<Discord />} />
          <Route path="ram-bank" element={<RamBank />} />
          <Route path="syiva" element={<Syiva />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
