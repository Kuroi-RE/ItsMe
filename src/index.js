import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Study from "./pages/Study.jsx";
import Project from "./pages/Project.jsx";
import NotFound from "./pages/NotFound";
import MovieApp from "./pages/Project/MovieApp";
import Syiva from "./pages/Spesials/Syiva";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="study" element={<Study />} />
          <Route path="movie-app" element={<MovieApp />} />
          <Route path="syiva" element={<Syiva />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
