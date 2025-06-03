import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../css/Header.css';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    
    <header>
      <div className="App">
        <div className="App-header">
          <button className="hamburger" style={{ color: "red" }} onClick={toggleSidebar}>☰</button>

          <div className="nav-links desktop-menu">
            <Link to="/" className="link">Hem 🏠</Link>
            <Link to="/Tjanster" className="link">Tjänster 🚗</Link>
            <Link to="/Kurses" className="link">Kurs 📘</Link>
            <Link to="/Bokning" className="link">Bokning 📝</Link>
            <Link to="/Kontaktus" className="link">Kontakta oss 📞</Link>
          </div>

          <div className="social-icons desktop-only">
            <a href="https://www.facebook.com/profile.php?id=61575667486100" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: 'white' }} /></a>
            <a href="https://www.instagram.com/dintrafikskolahassleholm/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: 'white' }} /></a>
            <a href="https://www.tiktok.com/@dintrafikskolahlm" target="_blank" rel="noopener noreferrer"><FaTiktok style={{ color: 'white' }} /></a>
          </div>

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

          <div className="marquee-container">
            <p className="marquee-text">
              🚦Välkommen till Din Trafikskola Hässleholm! Ta ditt körkort snabbt och enkelt!🚗
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
