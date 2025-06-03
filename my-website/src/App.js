import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kurses from '../src/js/Kurses.js';
import Header from './js/top.js';
import Home from '../src/js/Home.js';
import Kontaktus from '../src/js/Kontaktus.js';
import Bokning from '../src/js/Bokning.js';
import Tjanster from '../src/js/Tjanster.js';
import '../src/index.css';
import Footer from'../src/js/footer.js'


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
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
