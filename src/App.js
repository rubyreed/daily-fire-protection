import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
// import Action from './pages/Action';
import Services from './pages/Services';
import About from './pages/About';

function App() {
  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/action" element={<Action/>}/> */}
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
