import React from "react";
import { Routes, Route} from "react-router-dom";
import Projects from "./Projects";
import Home from "./Home";

export default function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/projects" element={<Projects />} />
    </Routes>
  );
}