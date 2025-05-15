import { FaWordpress } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
    "Wordpress",
    "Node.JS",
    "GIT",
    "GitHub",
    "SASS",
    "RWD",
    "Styled-components",
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <ScrollReveal>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
          O mnie
        </h2>
        <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-5 text-xl">
            Cześć! Jestem Przemek, młody frontend developer, który od zera
            zdobywa doświadczenie w świecie technologii webowych. Choć jestem na
            początku swojej kariery, moja pasja do kodowania i nieustanna chęć
            nauki napędzają mnie do nieprzerwanego rozwoju. Wszystkiego, czego
            się nauczyłem, nauczyłem się samodzielnie - studiując dokumentację,
            testując rozwiązania w praktyce i ucząc się na błędach. Moje
            podejście do programowania to nie tylko technika, ale także chęć
            rozwiązywania problemów i dostarczania wartości klientowi. Dzięki
            temu, że traktuję każdy projekt z pełnym zaangażowaniem, podchodzę
            do każdego zlecenia indywidualnie i profesjonalnie. Wiem, jak ważne
            jest dotrzymywanie terminów, dlatego możesz być pewien, że nie
            spocznę, dopóki zadanie nie zostanie w pełni ukończone. Chociaż
            wciąż mam wiele do nauczenia się, nie boję się wyzwań - właśnie one
            napędzają mnie do jeszcze intensywniejszej pracy i szukania
            najlepszych rozwiązań. Jeśli szukasz kogoś, kto jest głodny wiedzy,
            ambitny i dba o każdy szczegół, to dobrze trafiłeś!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
                Umiejętności
            </h3>
            <div className="flex justify-center flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              Języki
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300 items-center">
              <li>
                <strong>
                  <em>
                    Polski 🇵🇱
                  </em>
                </strong>
              </li>
              <li>
                <strong>
                  <em>
                    Angielski 🇬🇧
                  </em>
                </strong>
              </li>
              <li>
                <strong>
                  <em>
                    Słowacki 🇸🇰
                  </em>
                </strong>
              </li>
            </ul>
          </div>

        </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              Doświadczenie
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
            <li>
                <strong className="text-blue-400">
                📍
                  <em>Frontend Developer (Freelancer) </em> - Zdalnie | Styczeń 2024
                </strong>
                <span className="inline-block">- Zbudowanie responsywnej strony WWW - Pixel perfect z projektu Adobe XD Technologia: <FaWordpress/></span> <br />
                - Zbudowanie responsywnej strony WWW - Pixel perfect z projektu Adobe XD. Technologia: HTML, CSS, JS. 
                interfaces with JavaScript (ES6+), HTML, and CSS. <br />-
                Integrated RESTful APIs and optimized performance for faster
                load times.
              </li>


              <li>
                <strong className="text-blue-400">
                📍
                  <em>Frontend Developer (Freelancer) </em> - Zdalnie | Styczeń 2024
                </strong>
                <span className="inline-block">- Zbudowanie responsywnej strony WWW - Pixel perfect z projektu Adobe XD Technologia: <FaWordpress/></span> <br />
                - Zbudowanie responsywnej strony WWW - Pixel perfect z projektu Adobe XD. Technologia: HTML, CSS, JS. 
                interfaces with JavaScript (ES6+), HTML, and CSS. <br />-
                Integrated RESTful APIs and optimized performance for faster
                load times.
              </li>

              <li>
                <strong className="text-blue-400">
                📍
                  <em>Frontend Developer (Freelancer) </em> - Zdalnie | Styczeń 2024
                </strong>
                <span className="inline-block">- Zbudowanie responsywnej strony WWW - Pixel perfect z projektu Adobe XD Technologia: <FaWordpress/></span> <br />
                - Zbudowanie responsywnej strony WWW - Pixel perfect z projektu Adobe XD. Technologia: HTML, CSS, JS. 
                interfaces with JavaScript (ES6+), HTML, and CSS. <br />-
                Integrated RESTful APIs and optimized performance for faster
                load times.
              </li>
            </ul>
          </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default About;
