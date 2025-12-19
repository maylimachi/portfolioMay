"use client";

import { useState } from "react";
export default function Certificaciones() {
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
    <main className="bg-gray-950 min-h-screen flex flex-col items-center text-center px-6 pt-24">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">Certificaciones</h1>
      <p>Capacitaciones y formaciones que hice a lo largo de mi carrera.</p>
      <section id="educacion" className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="space-y-8">
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/salesforce.png" 
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Admin CRM
                </h3>
                <p className="text-sky-400 font-medium">
                  Fundacion Pescar | Salesforce (06/2025 - 12/2025)
                </p>
                <p className="text-gray-400 mt-1">
                  Configuración y administración de Salesforce CRM, trabajando con objetos, flujos, permisos, relaciones y automatizaciones. Ademas de implementar una integración entre nuestra pagina web y Salesforce.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1H3IC7GNtu7-iK_FzA224DDmtQUvtt-nu/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/fullstacklogo.png" // Cambiá esta ruta por la tuya, por ejemplo: "/images/talento-tech-logo.png"
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Developer Web Full Stack
                </h3>
                <p className="text-sky-400 font-medium">
                  Santander Open Academy (06/2025 - 12/2025)
                </p>
                <p className="text-gray-400 mt-1">
                  Desarrollo de aplicaciones web fullstack con el stack MERN (MongoDB, Express, React y Node.js), creando APIs REST y aplicaciones dinámicas.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/14NDdioJw9HcyNsNtSBlb4IzMIRHs29qc/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
                
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/javalogo.png" 
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Backend Developer con Java
                </h3>
                <p className="text-sky-400 font-medium">
                  Oracle Next Education (06/2025 - 03/2026)
                </p>
                <p className="text-gray-400 mt-1">
                  Desarrollo backend con Java, aplicando POO, manejo de datos y creación de servicios backend.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1ijD_UbJqquF_LXuaYDD-3daJem-5Ln3Q/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/node.png"
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>

              <div className="text-left flex-1">
                <h3 className="text-white font-semibold text-xl">
                  Backend Developer con Node.js
                </h3>
                <p className="text-sky-400 font-medium">
                  Talento Tech (06/2025 - Presente)
                </p>
                <p className="text-gray-400 mt-1">
                  Desarrollo backend con Node.js, profundizando en la lógica del servidor, creación de APIs REST, manejo de rutas, controladores y estructura de proyectos.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1xtUYyO0d_mgMiPqFfkKFrfRS5SkbrsGc/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/front.png" 
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Desarrolladora Frontend
                </h3>
                <p className="text-sky-400 font-medium">
                  Media pila (03/2025 - 07/2025)
                </p>
                <p className="text-gray-400 mt-1">
                  Desarrollo frontend con HTML, CSS y JavaScript, trabajando con el DOM, manejo de eventos, asincronía y creación de interfaces interactivas.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1XMyt_kKy7UFUBkA1RT_Y63XAqE-Ce7R9/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/python.png"
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Lenguaje de Python
                </h3>
                <p className="text-sky-400 font-medium">
                  Santander Open Academy (03/2025)
                </p>
                <p className="text-gray-400 mt-1">
                  Aprendí a programar con Python, creando soluciones lógicas y automatizando tareas.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/12UMB9S3myAkQaYQTfA5ExKB03C0kNdkD/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/frontend.png"
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Frontend
                </h3>
                <p className="text-sky-400 font-medium">
                  Oracle Next Education (03/2022 - 12/2022)
                </p>
                <p className="text-gray-400 mt-1">
                  Aprendí a desarrollar interfaces web modernas con HTML, CSS y JavaScript.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1PdO2zRpI5rCsaIBvaNAExy6q6QBXranc/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/busi.png"
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Bussiness Agility
                </h3>
                <p className="text-sky-400 font-medium">
                  Oracle Next Education (08/2021 - 01/2022)
                </p>
                <p className="text-gray-400 mt-1">
                  Certificado que valida competencias en agilidad empresarial, liderazgo adaptativo y mejora continua.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1HAY4U9dsSnPj4jNRzKS7_GWdLGbXIC0v/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/dp.png"
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Desarrollo Personal
                </h3>
                <p className="text-sky-400 font-medium">
                  Oracle Next Education (08/2021 - 01/2022)
                </p>
                <p className="text-gray-400 mt-1">
                  Certificado que acredita habilidades en autoconocimiento, propósito y crecimiento profesional continuo.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1USFFzgthwmVIAdEYtlIgg4nnJtegeJpH/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
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
          </div>
        </div>
      </section>
    </main>
  );
}
