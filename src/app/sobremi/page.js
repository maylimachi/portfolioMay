export default function SobreMi() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <section
      id="sobremi"
      className="bg-gray-950 text-white py-20 px-6"
    >
      {/* Título principal */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">
          Quién soy
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Desarrolladora web Fullstack jr, apasionada por crear experiencias digitales que marcan la diferencia.
        </p>
      </div>

      {/* Contenido: Imagen y cuadro de texto */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 px-6">
        {/* Imagen */}
        <div className="flex-shrink-0 lg:self-center">
          <img
            src="/fotoMay.jpg"
            alt="Mayra Limachi"
            className="w-80 object-cover rounded-xl border-4 border-blue-500 mx-auto lg:mx-0"
          />
        </div>

        {/* Cuadro de texto */}
        <div className="flex-1 bg-gray-800/50 border border-white/20 p-6 rounded-xl shadow-lg backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-blue-400">Sobre mí</h2>

          <p className="text-white leading-relaxed mb-4">
            Hola, soy Mayra Limachi, desarrolladora web Fullstack junior y estudiante de Sistemas. Me apasiona crear sitios web limpios, responsivos y aplicaciones que brinden experiencias digitales útiles y atractivas.
          </p>
          <p className="text-white leading-relaxed mb-4">
            Durante mi formación y prácticas profesionales, trabajé en diversos proyectos grupales donde pude aplicar y profundizar mis conocimientos en HTML, CSS, JavaScript, React, Node.js, Express y MongoDB, participando tanto en el desarrollo front-end como back-end.
          </p>
          <p className="text-white leading-relaxed mb-4">
            Además, he desarrollado e-commerce y aplicaciones web interactivas, mejorando mi capacidad de resolver problemas y de trabajar en colaboración con otros.
          </p>
          <p className="text-white leading-relaxed mb-4">
            Me motiva aprender constantemente nuevas tecnologías y mejorar mis habilidades en programación, con el objetivo de construir soluciones digitales que generen un impacto real. Disfruto diseñar interfaces atractivas, optimizar la experiencia del usuario y mantener un código limpio y eficiente.
          </p>
          <p className="text-white leading-relaxed">
            Busco crecer profesionalmente en un entorno colaborativo donde pueda aportar, aprender y superar desafíos de manera creativa.
          </p>
        </div>
      </div>

      {/* Educación */}
      <section id="educacion" className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent text-center mb-12">
            Educación
          </h2>

          <div className="space-y-8">
            {/* Primera entrada */}
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              {/* Icono de graduación */}
              <div className="text-sky-400 text-3xl mt-1">
                🎓
              </div>

              {/* Texto */}
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Licenciatura en Analista de Sistemas
                </h3>
                <p className="text-sky-400 font-medium">
                  Facultad de Ingeniería (2021 - Presente)
                </p>
                <p className="text-gray-400 mt-1">
                  Aprendí mis primeros pasos en tecnología y desarrollo de software.
                </p>
              </div>
            </div>

            {/* Segunda entrada */}
            <div className="flex items-start gap-4 bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg">
              {/* Icono de graduación */}
              <div className="text-sky-400 text-3xl mt-1">
                🎓
              </div>

              {/* Texto */}
              <div className="text-left">
                <h3 className="text-white font-semibold text-xl">
                  Secundario completo
                </h3>
                <p className="text-sky-400 font-medium">
                  Carlos Saavedra Lamas | Pilar (2020)
                </p>
                <p className="text-gray-400 mt-1">
                  Finalicé mis estudios secundarios con un enfoque en ciencias y matemáticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades técnicas y blandas */}
      <section id="habilidades" className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent text-center mb-12">
            Habilidades técnicas
          </h2>

          <div className="space-y-6">
            {/* HTML */}
            <div>
              <div className="flex justify-between mb-1">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[95%]"></div>
              </div>
            </div>

            {/* CSS */}
            <div>
              <div className="flex justify-between mb-1">
                <span>CSS</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[95%]"></div>
              </div>
            </div>

            {/* JavaScript */}
            <div>
              <div className="flex justify-between mb-1">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[90%]"></div>
              </div>
            </div>

            {/* React */}
            <div>
              <div className="flex justify-between mb-1">
                <span>React</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[70%]"></div>
              </div>
            </div>

            {/* Node.js */}
            <div>
              <div className="flex justify-between mb-1">
                <span>Node.js</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[60%]"></div>
              </div>
            </div>

            {/* MongoDB */}
            <div>
              <div className="flex justify-between mb-1">
                <span>MongoDB</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[60%]"></div>
              </div>
            </div>

            {/* Python */}
            <div>
              <div className="flex justify-between mb-1">
                <span>Python</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[85%]"></div>
              </div>
            </div>

            {/* Java */}
            <div>
              <div className="flex justify-between mb-1">
                <span>Java</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>

          {/* Habilidades blandas */}
          <section id="habilidades-blandas" className="bg-gray-950 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent text-center mb-12">
                Habilidades blandas
              </h2>

              <div className="space-y-6">
                {/* Comunicación */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Comunicación</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-cyan-500 h-4 rounded-full w-[100%]"></div>
                  </div>
                </div>

                {/* Trabajo en equipo */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Trabajo en equipo</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-cyan-500 h-4 rounded-full w-[100%]"></div>
                  </div>
                </div>

                {/* Gestion de tiempo */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Gestion de tiempo</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-cyan-500 h-4 rounded-full w-[100%]"></div>
                  </div>
                </div>

                {/* Resolución de problemas */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Resolución de problemas</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-cyan-500 h-4 rounded-full w-[100%]"></div>
                  </div>
                </div>

                {/* Creatividad */}
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
