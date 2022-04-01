import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/>
      </ScrollToTop>
    </div>
  );
}

export default App;
