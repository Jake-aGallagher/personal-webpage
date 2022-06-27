import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="MainContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
