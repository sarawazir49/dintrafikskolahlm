import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kurses from '../src/js/Kurses.js';
import Header from './js/top.js';
import Home from '../src/js/Home.js';
import Kontaktus from '../src/js/Kontaktus.js';
import Bokning from '../src/js/Bokning.js';
import Tjanster from '../src/js/Tjanster.js';
import '../src/index.css';
import signs from '../src/media/signs.jpg';


function App() {
  return (
    <BrowserRouter>
  <div>
 <Header/>
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
    </BrowserRouter>
  );
}
export default App;
