import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <ScrollReveal>
      <div className="px-4 w-150">
        <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
          Skontaktuj się
        </h2>

        <form action="https://formsubmit.co/przemek.rodak1@gmail.com" method="POST" className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Wpisz imię"
              required
              className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="przyklad@gmail.com"
              required
              className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>
          <div className="relative">
            <textarea
              type="message"
              id="message"
              name="message"
              rows={6}
              placeholder="Napisz swoją wiadomość..."
              required
              className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r flex justify-center cursor-pointer from-teal-500 to-indigo-600 px-6 py-3 rounded font-medium transition realtive overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Wyślij
          </button>
        </form>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
