import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Study from "./pages/Study.jsx";
import Space from "./pages/Space";
import Music from "./pages/Music";
import NotFound from "./pages/NotFound";
import MovieApp from "./pages/Project/MovieApp";
import Credits from "./pages/Spesials/Credits";
import TodoApp from "./pages/Project/TodoApp";
import Instagram from "./pages/Project/Instagram";
import Discord from "./pages/Project/DiscordJs";
import RamBank from "./pages/Project/RamBank";

export default function App() {
  return (
    <div className="bg-fixed bg-cover bg-center bg-light dark:bg-dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="study" element={<Study />} />
            <Route path="music" element={<Music />} />
            <Route path="space" element={<Space />} />
            <Route path="movie-app" element={<MovieApp />} />
            <Route path="project-ig" element={<Instagram />} />
            <Route path="project-todo" element={<TodoApp />} />
            <Route path="project-discord" element={<Discord />} />
            <Route path="project-bank" element={<RamBank />} />
            <Route path="syiva" element={<Credits />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
