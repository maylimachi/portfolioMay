import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactSection() {
  return (
    <section className="bg-gray-900 text-white px-6 py-16 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Formulario */}
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

        {/* Mapa + contactos */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Ubicación */}
          <div className="bg-gray-950 p-6 rounded-3xl shadow-lg flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">
              Vivo en
            </h2>
            <p className="text-gray-300">Pilar, Buenos Aires, Argentina</p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.944112258017!2d-58.77623472427279!3d-34.44025104891171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9f2484db05a3%3A0xf9001ff000305a6d!2sCarlos%20Moyano%202811%2C%20B1664%20Manuel%20Alberti%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1729100400000!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              className="rounded-xl border border-white/20 shadow-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}


