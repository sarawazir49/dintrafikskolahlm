import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } 
from "react-icons/fa"; 
import '../css/Kontaktus.css';

export default function Kontaktus() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Kontakta oss</h2>
        <p>
          Välkommen att kontakta oss på Din Trafikskola! Vi ser fram emot att hjälpa dig.
        </p>

        <div className="contact-info">
          <div className="info-item">
            <FaPhone />
            <div>Telefon: 0760-389 192</div>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <div>Email: info@dintrafikskolahlm.se</div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <div>Hässleholm Östergatan 3A,</div>
          </div>
          <div className="info-item">
            <FaClock />
            <div>
              <div>Måndag - Fredag: 09:00 - 16:00</div>
              <div>Lördag: 10:00 - 14:00</div>
              <div>Söndag: Stängt</div>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xyzwalwv"
          method="POST"
        >
          <input type="text" name="name" placeholder="Namn" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea name="message" placeholder="Meddelande" rows="4" required />
          <button type="submit">Skicka</button>
        </form>
      </div>
    </div>
  );
}
