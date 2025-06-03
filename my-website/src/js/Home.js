import kampani from '../media/kampanj.jpg';
import dtsv from '../media/dtsv.mp4';
import '../css/Home.css';
import '../media/bacgr.png';

const Home = () => {
  return (
    <div className="container">
      <div className="homehead">
        <h1>Välkommen till Din Trafikskola Hässleholm</h1>
        <p>Din trafikskola är här för att hjälpa dig att bli en säker och självsäker förare.</p>
        <p>Vi erbjuder kurser för alla nivåer, från nybörjare till avancerade förare.</p>
      </div>

      <div className="Dtsv" style={{ display: 'flex', justifyContent: 'center' }}>
        <video
          src={dtsv}
          className="dtsv"
          style={{ width: "500px", height: "700px", padding: "20px" }}
          autoPlay
          loop
          muted
          playsInline
        >
          Din Trafikskola Video
        </video>

        <img
          src={kampani}
          alt="kampanj"
          className="Door"
          style={{ width: "500px", height: "700px", padding: "20px" }}
        />
      </div>

      <div className="map-container" style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <iframe
          title="Din Trafikskola Location"
          src="https://maps.google.com/maps?q=Hässleholm%20Östergatan%203A%2C%20281%2030&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  <div className='downImage'>
    <img src={require('../media/bacgr.png')} alt="Background" />
  </div>
    </div>
  

  );
};

export default Home;
