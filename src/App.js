//Importerar React hooks och komponenter som krävs
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Cv from './pages/cv';
import Portfolio from './pages/portfolio';
import Footer from './components/Footer';
import './App.css';
import Easter1 from './components/Easter-egg1';
import { handleKeyDown } from './components/Easter-egg2';

//Exporterar standard funktionen 'App'
export default function App() {
  //Använder useEffect hook för att köra Easter1 funktionen en gång när komponenten mountas
  useEffect(() => {
    Easter1();
  }, []);

  //Lägger till en eventlyssnare för tangentbordstryckningar när komponenten mountas
  document.addEventListener('keydown', handleKeyDown);

  //Returnerar JSX för komponenten
  return (
    <Router>
      <header className="site-header">
        <Menu />
      </header>
      <main className="site-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <Footer />
      </footer>
    </Router>
  );
}
