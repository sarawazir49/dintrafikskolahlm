// src/pages/Kurses.js

import '../css/kurses.css';

const Kurses = () => {
  return (
    <section id="courses" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-red-700 mb-8">Våra Kurser</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeatable Course Card */}
          {[
            {
              title: "B-Körkort",
              desc: "Lär dig att köra en personbil med teori och körlektioner. Förbered dig för körprovet!",
            },
            {
              title: "Moped Klass 1 & 2",
              desc: "Kör moped säkert. Vi lär dig allt från teori till praktiska körlektioner.",
            },
            {
              title: "Handledarkurs",
              desc: "För dig som vill vara handledare när du övningskör. Vi lär dig regler och säkerhet.",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="bg-yellow-100 border-l-4 border-red-600 p-6 rounded-xl shadow-lg hover:bg-yellow-200 transition"
            >
              <h3 className="text-2xl font-semibold text-red-700 mb-4">{course.title}</h3>
              <p className="text-gray-600">{course.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kurses;
