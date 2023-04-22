import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="aboutus" element={ <AboutUs/> } />
        <Route path="gallery" element={ <Gallery/> } />
      </Routes>
    </div>
  );
}

export default App;
