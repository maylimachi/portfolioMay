export default function SobreMi() {
  return (
    <main className="bg-gray-950 min-h-screen flex flex-col justify-center items-center text-center px-6">
      <section
      id="sobremi"
      className="bg-gray-950 text-white py-20 px-6"
    >

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">
          Quién soy
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12sm:px-4">

        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:self-center">
          <img
            src="/fotoMay.jpg"
            alt="Mayra Limachi"
            className="w-64 sm:w-72 lg:w-80 object-cover rounded-xl border-4 border-blue-500 mx-auto lg:mx-0"
          />
        </div>

        <div className="flex-1 w-full max-w-full sm:max-w-2xl lg:max-w-3xl bg-gray-800/50 border border-white/20 p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-sm mx-2 sm:mx-auto">
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">
            Sobre mí
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed mb-3 sm:mb-4">
            Hola, soy Mayra Limachi, desarrolladora web Fullstack junior y estudiante de Sistemas. Me apasiona crear sitios web limpios, responsivos y aplicaciones que brinden experiencias digitales útiles y atractivas.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed mb-3 sm:mb-4">
            Durante mi formación y prácticas profesionales, trabajé en diversos proyectos grupales donde pude aplicar y profundizar mis conocimientos en HTML, CSS, JavaScript, React, Node.js, Express y MongoDB, participando tanto en el desarrollo front-end como back-end.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed mb-3 sm:mb-4">
            Además, he desarrollado e-commerce y aplicaciones web interactivas, mejorando mi capacidad de resolver problemas y de trabajar en colaboración con otros.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed mb-3 sm:mb-4">
            Me motiva aprender constantemente nuevas tecnologías y mejorar mis habilidades en programación, con el objetivo de construir soluciones digitales que generen un impacto real. Disfruto diseñar interfaces atractivas, optimizar la experiencia del usuario y mantener un código limpio y eficiente.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
            Busco crecer profesionalmente en un entorno colaborativo donde pueda aportar, aprender y superar desafíos de manera creativa.
          </p>
        </div>
      </div>

      <section id="educacion" className="bg-gray-950 text-white mt-12  sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent text-center mb-3">
            Educación
          </h2>

          <div className="space-y-6 sm:space-y-8">

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-sky-400 text-3xl sm:text-4xl mt-0 sm:mt-1 flex-shrink-0">
                🎓
              </div>

              <div className="text-left">
                <h3 className="text-white font-semibold text-lg sm:text-xl">
                  Licenciatura en Analista de Sistemas
                </h3>
                <p className="text-sky-400 font-medium text-sm sm:text-base">
                  Facultad de Ingeniería (2021 - Presente)
                </p>
                <p className="text-gray-400 mt-1 text-xs sm:text-sm">
                  Aprendí mis primeros pasos en tecnología y desarrollo de software.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-sky-400 text-3xl sm:text-4xl mt-0 sm:mt-1 flex-shrink-0">
                🎓
              </div>

              <div className="text-left">
                <h3 className="text-white font-semibold text-lg sm:text-xl">
                  Secundario completo
                </h3>
                <p className="text-sky-400 font-medium text-sm sm:text-base">
                  Carlos Saavedra Lamas | Pilar (2020)
                </p>
                <p className="text-gray-400 mt-1 text-xs sm:text-sm">
                  Finalicé mis estudios secundarios con un enfoque en ciencias y matemáticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent text-center">
            Habilidades técnicas
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[95%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>CSS</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[95%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[90%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>React</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[80%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Node.js</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[80%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>MongoDB</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[70%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Python</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[85%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Java</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[70%]"></div>
              </div>
            </div>
          </div>

          <section id="habilidades-blandas" className="bg-gray-950 text-white mt-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent text-center">
                Habilidades blandas
              </h2>

              <div className="space-y-6">

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Comunicación</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-cyan-500 h-4 rounded-full w-[100%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Trabajo en equipo</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-cyan-500 h-4 rounded-full w-[100%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Gestion de tiempo</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-cyan-500 h-4 rounded-full w-[100%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Resolución de problemas</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-cyan-500 h-4 rounded-full w-[100%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Resiliencia</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-cyan-500 h-4 rounded-full w-[100%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>

    </section>
    </main>
  );
}
