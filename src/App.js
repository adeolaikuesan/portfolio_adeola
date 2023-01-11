import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
