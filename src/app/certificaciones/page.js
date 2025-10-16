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
            {/* Primer proyecto */}
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
                  Fundacion Pescar | Salesforce (06/2025 - Presente)
                </p>
                <p className="text-gray-400 mt-1">
                  Aprendí mis primeros pasos en tecnología y desarrollo de software.
                </p>
                {/* Botón que abre el modal */}
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1I2SB5ydC-GKm3WY2P3i-NmKgghAwE0II/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            {/* Segundo proyecto */}
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
                  Santander Open Academy (06/2025 - Presente)
                </p>
                <p className="text-gray-400 mt-1">
                  Finalicé mis estudios secundarios con un enfoque en ciencias y matemáticas.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1vMbwBsO8_rm8_aq9zPl1iAPsim5SthMV/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
                
              </div>
            </div>

            {/* Tercer proyecto */}
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/javalogo.png" // Cambiá esta ruta por la tuya, por ejemplo: "/images/talento-tech-logo.png"
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Backend Developer con Java
                </h3>
                <p className="text-sky-400 font-medium">
                  Oracle Next Education (06/2025 - Presente)
                </p>
                <p className="text-gray-400 mt-1">
                  Finalicé mis estudios secundarios con un enfoque en ciencias y matemáticas.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1vMbwBsO8_rm8_aq9zPl1iAPsim5SthMV/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            {/* Cuarto proyecto */}
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              {/* Logo subido por vos */}
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/node.png" // Cambiá esta ruta por la tuya, por ejemplo: "/images/talento-tech-logo.png"
                  alt="Logo del curso"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>

              {/* Texto */}
              <div className="text-left flex-1">
                <h3 className="text-white font-semibold text-xl">
                  Backend Developer con Node.js
                </h3>
                <p className="text-sky-400 font-medium">
                  Talento Tech (06/2025 - Presente)
                </p>
                <p className="text-gray-400 mt-1">
                  Aprendí sobre desarrollo backend, APIs REST y conexión con bases de datos.
                </p>

                {/* Botón Ver Certificación */}
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1vMbwBsO8_rm8_aq9zPl1iAPsim5SthMV/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            {/* Quinto proyecto */}
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/front.png" // Cambiá esta ruta por la tuya, por ejemplo: "/images/talento-tech-logo.png"
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
                  Finalicé mis estudios secundarios con un enfoque en ciencias y matemáticas.
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

            {/* Sexto proyecto */}
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/python.png" // Cambiá esta ruta por la tuya, por ejemplo: "/images/talento-tech-logo.png"
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
                  Finalicé mis estudios secundarios con un enfoque en ciencias y matemáticas.
                </p>
                <button
                  onClick={() =>
                    abrirModal("https://drive.google.com/file/d/1vMbwBsO8_rm8_aq9zPl1iAPsim5SthMV/preview")
                  }
                  className="inline-block mt-3 bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Ver certificación
                </button>
              </div>
            </div>

            {/* Septimo proyecto */}
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/frontend.png" // Cambiá esta ruta por la tuya, por ejemplo: "/images/talento-tech-logo.png"
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
                  Finalicé mis estudios secundarios con un enfoque en ciencias y matemáticas.
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

            {/* Octavo proyecto */}
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/busi.png" // Cambiá esta ruta por la tuya, por ejemplo: "/images/talento-tech-logo.png"
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
                  Finalicé mis estudios secundarios con un enfoque en ciencias y matemáticas.
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

            {/* Noveno proyecto */}
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src="/dp.png" // Cambiá esta ruta por la tuya, por ejemplo: "/images/talento-tech-logo.png"
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
                  Finalicé mis estudios secundarios con un enfoque en ciencias y matemáticas.
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

            {/* Modal reutilizable */}
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
