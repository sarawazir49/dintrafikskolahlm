
import { useState, useRef, } from 'react';


import '../css/Tjanster.css'; // Ensure this path is correct and the file exists

const Tjanster = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef(null);

  const services = [
    {
      title: "🚗 Körlektioner",
      content: (
        <div className="service-content">
          <p className="paragraph">
            Individuellt anpassade körlektioner med erfarna instruktörer...
          </p>
          <p className="paragraph">
            Våra körlektioner är anpassade efter dina behov och nivå...
          </p>
          <ul className="service-list">
            <li><strong className="highlight">Individuellt anpassade lektioner:</strong> Fokusera på de områden där du behöver mest hjälp...</li>
            <li><strong className="highlight">Praktisk erfarenhet:</strong> Övning i verkliga trafiksituationer...</li>
            <li><strong className="highlight">Erfarna instruktörer:</strong> Professionella och vänliga...</li>
            <li><strong className="highlight">Flexibla tider:</strong> Vi erbjuder lektioner på olika tider...</li>
          </ul>
          <p className="paragraph">Våra körlektioner är ett bra sätt att förbereda sig...</p>
        </div>
      )
    },
    {
      title: "📚 Teorilektioner",
      content: (
        <div className="service-content">
          <p className="paragraph">
            Teorilektionerna är en central del av körkortsutbildningen...
          </p>
          <p className="paragraph bold">Här är vad du får lära dig:</p>
          <ul className="service-list">
            <li><strong className="highlight">Trafikregler:</strong> Genomgång av alla viktiga trafikregler...</li>
            <li><strong className="highlight">Vägskyltar:</strong> Du lär dig känna igen vägskyltar...</li>
            <li><strong className="highlight">Riskmedvetenhet:</strong> Fokus på trafiksäkerhet...</li>
            <li><strong className="highlight">Färdigheter:</strong> Förberedelser inför teoriprovet...</li>
          </ul>
          <p className="paragraph bold">Utbildningsmaterial:</p>
          <ul className="service-list">
            <li>Digitala kurser och teoriböcker.</li>
            <li>Övningsprov och tester...</li>
            <li>Instruktörsstödd undervisning...</li>
          </ul>
          <p className="paragraph bold">
            <strong>Mål:</strong> Att säkerställa att du har den kunskap som krävs...
          </p>
        </div>
      )
    },
    {
      title: "🛑 Trafiksäkerhetsutbildning",
      content: (
        <div className="service-content">
          <p className="paragraph">Trafiksäkerhetsutbildning syftar till att öka medvetenheten...</p>
          <p className="paragraph">Denna utbildning är ofta ett krav...</p>
          <ul className="service-list">
            <li><strong className="highlight">Riskutbildning del 1 (Riskettan):</strong> Fokus på alkohol...</li>
            <li><strong className="highlight">Riskutbildning del 2 (Halkbanan):</strong> Praktisk träning...</li>
          </ul>
        </div>
      )
    },
    {
      title: "✅ Förberedelse för körkortsprov",
      content: (
        <div className="service-content">
          <p className="paragraph">Förberedelse för körkortsprov är en viktig del...</p>
          <p className="paragraph">Vårt mål är att ge dig alla verktyg du behöver...</p>
          <ul className="service-list">
            <li><strong className="highlight">Individuellt anpassade lektioner:</strong> Fokusera på de områden...</li>
            <li><strong className="highlight">Praktisk erfarenhet:</strong> Övning i verkliga trafiksituationer...</li>
            <li><strong className="highlight">Erfarna instruktörer:</strong> Professionella och vänliga...</li>
            <li><strong className="highlight">Flexibla tider:</strong> Vi erbjuder lektioner på olika tider...</li>
          </ul>
          <p className="paragraph">Med vår hjälp kommer du känna dig trygg...</p>
        </div>
      )
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setTimeout(() => {
      if (contentRef.current) contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="container1">
      <section className="section1">
        <h2 className="title">Våra Tjänster</h2>
        <div className="tjanster-info">
          <ul className="list">
            {services.map((service, index) => (
              <li key={index}>
                <button className="service-button" onClick={() => handleClick(index)}>
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
          {activeIndex !== null && (
            <div ref={contentRef} className="service-detail">
              <h3 className="subtitle">{services[activeIndex].title}</h3>
              <div className="service-content-wrapper">
                {services[activeIndex].content}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tjanster;
