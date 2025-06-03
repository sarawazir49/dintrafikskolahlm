import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import React from 'react';
import Kurses from '../src/js/Kurses.js';
import Home from '../src/js/Home.js';
import Kontaktus from '../src/js/Kontaktus.js';
import Bokning from '../src/js/Bokning.js';
import Tjanster from '../src/js/Tjanster.js';
import '../src/index.css';
import signs from '../src/media/signs.jpg';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* Hamburger for mobile */}
          <button className="hamburger" style={{ color: "red" }} onClick={toggleSidebar}>☰</button>

          {/* Desktop Links */}
          <div className="nav-links desktop-menu">
            <Link to="/" className="link">Hem 🏠</Link>
            <Link to="/Tjanster" className="link">Tjänster 🚗</Link>
            <Link to="/Kurses" className="link">Kurs 📘</Link>
            <Link to="/Bokning" className="link">Bokning 📝</Link>
            <Link to="/Kontaktus" className="link">Kontakta oss 📞</Link>
          </div>

          {/* Social icons on desktop */}
          <div className="social-icons desktop-only">
            <a href="https://www.facebook.com/profile.php?id=61575667486100" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: 'white' }} /></a>
            <a href="https://www.instagram.com/dintrafikskolahassleholm/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: 'white' }} /></a>
            <a href="https://www.tiktok.com/@dintrafikskolahlm" target="_blank" rel="noopener noreferrer"><FaTiktok style={{ color: 'white' }} /></a>
          </div>

          {/* Sidebar for mobile */}
          <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={closeSidebar}>×</button>
            <Link to="/" onClick={closeSidebar} className="link">Hem 🏠</Link>
            <Link to="/Tjanster" onClick={closeSidebar} className="link">Tjänster 🚗</Link>
            <Link to="/Kurses" onClick={closeSidebar} className="link">Kurs 📘</Link>
            <Link to="/Bokning" onClick={closeSidebar} className="link">Bokning 📝</Link>
            <Link to="/Kontaktus" onClick={closeSidebar} className="link">Kontakta oss 📞</Link>

            <div className="sidebar-social-icons">
              <a href="https://www.facebook.com/profile.php?id=61575667486100" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: 'white', fontSize: '24px' }} /></a>
              <a href="https://www.instagram.com/dintrafikskolahassleholm/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: 'white', fontSize: '24px' }} /></a>
              <a href="https://www.tiktok.com/@dintrafikskolahlm" target="_blank" rel="noopener noreferrer"><FaTiktok style={{ color: 'white', fontSize: '24px' }} /></a>
            </div>
          </div>
        </header>

        <div className="marquee-container">
          <p className="marquee-text">
            🚦Välkommen till Din Trafikskola Hässleholm! Ta ditt körkort snabbt och enkelt!🚗
          </p>
        </div>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tjanster" element={<Tjanster />} />
            <Route path="/Kurses" element={<Kurses />} />
            <Route path="/Kontaktus" element={<Kontaktus />} />
            <Route path="/Bokning" element={<Bokning />} />
          </Routes>
        </div>

        <footer className="footer">
          <img src={signs} className='signs' alt="Traffic signs" />
          <div className="footer-content">
            <p>© 2025 Din Trafikskola Hässleholm. Alla rättigheter förbehållna.</p>
            <p>Address: Hässleholm Östergatan 3A, 281 30</p>
            <p>Telefon: 0760-389 192</p>
            <p>Email: info@dintrafikskolahlm.se</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
