"use client";
import { useState } from "react";

export default function Home() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [certificadoActual, setCertificadoActual] = useState("");

  const abrirModal = (url) => {
    setCertificadoActual(url);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setCertificadoActual("");
  };

  return (
    <main className="bg-gray-950 flex-1 flex flex-col justify-center items-center text-center px-6 h-screen">

      <section className="flex flex-col justify-center items-center text-center">
        <p className="text-lg font-medium mb-2 bg-blue-800 bg-opacity-30 px-4 py-2 rounded-full inline-block">
          👋 Bienvenido a mi portfolio
        </p>

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          Hola, soy Mayra Limachi
        </h1>

        <h2 className="text-xl text-gray-300 font-semibold mb-6">
          Desarrolladora Web Fullstack jr | Estudiante de Sistemas
        </h2>

        <p className="max-w-2xl text-gray-300 mb-8">
          Creando sitios web limpios y responsivos, y construyendo experiencias digitales que marcan la diferencia.
        </p>

        <div className="flex space-x-4">
          <button
            onClick={() =>
              abrirModal(
                "https://drive.google.com/file/d/1-wZ8kYHshIsUWgSYl6RepecanjxaUmgp/preview"
              )
            }
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-full transition"
          >
            Ver CV
          </button>

          <a
            href="https://drive.google.com/uc?export=download&id=1-wZ8kYHshIsUWgSYl6RepecanjxaUmgp"
            download="CV_Mayra_Limachi.pdf"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
          >
            Descargar CV
          </a>
        </div>


        {mostrarModal && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={cerrarModal}
          >
            <div
              className="bg-gray-900 p-6 rounded-xl shadow-2xl w-11/12 max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={cerrarModal}
                className="text-gray-400 hover:text-white float-right text-xl"
              >
                ✕
              </button>
              <iframe
                src={certificadoActual}
                className="w-full h-[500px] mt-4 rounded-lg border border-white/20"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

