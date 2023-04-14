import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Screen/Home";
import Service from "./Screen/Service";
import Technologies from "./Screen/Technologies";
import Aboutus from "./Screen/Aboutus";
import Career from "./Screen/Career";
import Contactus from "./Screen/Contactus";

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <div className="mt-28">
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Service" element={<Service />} />
        <Route exact path="/Technologies" element={<Technologies />} />
        <Route exact path="/Aboutus" element={<Aboutus />} />
        <Route exact path="/Career" element={<Career />} />
        <Route exact path="/Contactus" element={<Contactus />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
