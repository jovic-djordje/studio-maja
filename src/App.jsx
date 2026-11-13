import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import About from "./pages/About";
import Academy from "./pages/Academy";
import PixelTransition from "./components/PixelTransition";

function App() {
  return (
    <Router>
      <PixelTransition>
        <div className="app-layout">
          <Navigation />

          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/academy" element={<Academy />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </PixelTransition>
    </Router>
  );
}

export default App;
