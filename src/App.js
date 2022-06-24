import logo from './logo.svg';
import './App.css';
import Navbar from './nav.js';
import { Routes, Route, Link } from "react-router-dom";
import MainContent from './Maincontent';
import Navy from './navy';
import Home from "./components/Home";
import Contact from "./components/Contact"
import About from './components/About';
function App() {
  return (
    <div className="App">
      
      
      <Navbar />
      <Routes>
        <Route path="/components/Home" element={<Home />} />
        <Route path="/components/Contact" element={<Contact />} />
        <Route path='/components/About' element={<About />}/>
      </Routes>
      
    </div>
  );
}





export default App;
