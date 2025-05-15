import profileImage from "../assets/profile-image.jpg";
import { IoMdDownload } from "react-icons/io";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15"
    >
      <div className="text-center z-10 px-4">
        <img
          src={profileImage}
          alt="zdjęcie profilowe"
          className="w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all"
        />
      </div>
      <div className="text-center font-mono z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-right">
          Cześć, jestem Przemysław Rodak
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
          Tworzę nowoczesne strony internetowe, które są estetyczne i
          funkcjonalne. Moim głównym obszarem zainteresowania jest <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent font-bold">React</span>, choć w
          swojej pracy korzystam także z <span className="font-bold">HTML</span>, <span className="font-bold">CSS</span> i <span className="font-bold">JavaScript</span>. Każdy projekt
          traktuję indywidualnie, dbając o detale i terminowość, aby dostarczyć
          rozwiązania dopasowane do potrzeb klienta. Zawsze jestem gotów na
          wyzwania i ciągły rozwój. Jeśli szukasz ambitnego i profesjonalnego
          developera, zapraszam do kontaktu!
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="#contact"
            className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden"
          >
            Kontakt
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r flex flex-row items-center from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden"
          >
            <p>Moje CV</p>
            <span className="ml-2 h-3">
              <IoMdDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
