import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/js/top'; // adjust path as needed
import Footer from '../src/js/footer'; // adjust path as needed
import Home from '../src/js/Home'; // adjust path as needed
import Tjanster from '../src/js/Tjanster';
import Kurses from '../src/js/Kurses';
import Kontaktus from '../src/js/Kontaktus';
import Bokning from '../src/js/Bokning';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tjanster" element={<Tjanster />} />
          <Route path="/Kurses" element={<Kurses />} />
          <Route path="/Kontaktus" element={<Kontaktus />} />
          <Route path="/Bokning" element={<Bokning />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
