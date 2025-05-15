import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footerv>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10">
        <div className="flex gap-10 p-4 justify-center text-white">
          <a
            href="https://www.facebook.com/przemek.rodak"
            className="p-2 text-3xl rounded hover:-translate-y-2 transition-all text-white hover:text-blue-500"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>
        <p>@ 2025 <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent font-bold">Rodak</span>. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footerv>
  );
};

export default Footer;
