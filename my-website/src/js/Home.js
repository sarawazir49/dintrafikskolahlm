import kampani from '../media/kampanj.jpg';
import dtsv from '../media/dtsv.mp4';
import '../css/Home.css';

const signs = [
  {
    id: 1,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Swedish_road_sign_B1.svg/120px-Swedish_road_sign_B1.svg.png',
    alt: 'Stop Sign',
    shape: 'octagon',
  },
  {
    id: 2,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Swedish_road_sign_A7.svg/120px-Swedish_road_sign_A7.svg.png',
    alt: 'Yield Sign',
    shape: 'triangle',
  },
  {
    id: 3,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Swedish_road_sign_C22-1.svg/120px-Swedish_road_sign_C22-1.svg.png',
    alt: 'Speed Limit',
    shape: 'circle',
  },
  {
    id: 4,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Swedish_road_sign_C1.svg/120px-Swedish_road_sign_C1.svg.png',
    alt: 'No Entry',
    shape: 'circle',
  },
  {
    id: 5,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Swedish_road_sign_D3.svg/120px-Swedish_road_sign_D3.svg.png',
    alt: 'Pedestrian Crossing',
    shape: 'diamond',
  },
  {
    id: 6,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Swedish_road_sign_A14.svg/120px-Swedish_road_sign_A14.svg.png',
    alt: 'Road Work',
    shape: 'diamond',
  },
];

export function TrafficSignsGrid() {
  return (
    <div className="signs-grid">
      {signs.map(sign => (
        <div key={sign.id} className={`sign ${sign.shape}`}>
          <img src={sign.src} alt={sign.alt} />
        </div>
      ))}
    </div>
  );
}
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

      <TrafficSignsGrid />
    </div>
  );
};

export default Home;
