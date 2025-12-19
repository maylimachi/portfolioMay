import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactSection() {
  return (
    <section className="bg-gray-900 text-white px-6 py-16 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        <form
          action="https://formspree.io/f/meoloybp"
          method="POST"
          className="bg-gray-950 shadow-2xl rounded-3xl p-8 flex-1 flex flex-col gap-6"
        >
          <h2 className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent text-3xl font-bold text-center mb-4">Contáctame</h2>

          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="w-full p-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-600 transition-all outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            className="w-full p-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-600 transition-all outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            className="w-full p-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-600 hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Enviar
          </button>
        </form>

      </div>
    </section>
  );
}


