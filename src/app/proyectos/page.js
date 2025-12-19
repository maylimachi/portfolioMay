export default function Proyectos() {
  return (
    <main className="bg-gray-950 min-h-screen flex flex-col justify-center items-center text-center px-6 ">

      <section id="proyectos" className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent text-center mb-12">
            Mis Proyectos
          </h2>

          <div className="space-y-10">
            <div className="bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6">
              <img
                src="/puentesolidario.png"
                alt="Plataforma de fundaciones"
                className="w-full md:w-60 h-40 object-cover rounded-xl border border-white/10"
              />

              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-white">🔧 Plataforma de fundaciones</h3>
                <p className="text-gray-400 mt-2">
                  Aplicación web grupal que permite buscar fundaciones según la causa.
                </p>

                <div className="mt-4">
                  <a
                    href="https://github.com/sergiosuarez5/puente-solidario" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 w-fit transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577v-2.02c-3.338.726-4.043-1.416-4.043-1.416-.546-1.386-1.333-1.755-1.333-1.755-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.303 3.492.997.108-.776.42-1.303.763-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">HTML</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">Bootstrap</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">CRM</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6">
              <img
                src="/muebles.png"
                alt="E-commerce App de Muebles"
                className="w-full md:w-60 h-40 object-cover rounded-xl border border-white/10"
              />

              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-white">🔧 E-commerce App de Muebles</h3>
                <p className="text-gray-400 mt-2">
                  Aplicación web grupal que permite buscar muebles según la categoría y comprar según lo requerido.
                </p>

                <div className="mt-4">
                  <a
                    href="https://github.com/fliutkevier/sprint-1y2-fullstackITBA" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 w-fit transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577v-2.02c-3.338.726-4.043-1.416-4.043-1.416-.546-1.386-1.333-1.755-1.333-1.755-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.303 3.492.997.108-.776.42-1.303.763-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">HTML</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">Bootstrap</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">Express.js</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6">
              <img
                src="/colorgame.png" 
                alt="Color Game"
                className="w-full md:w-60 h-40 object-cover rounded-xl border border-white/10"
              />

              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-white">🎨 Color Game</h3>
                <p className="text-gray-400 mt-2">
                  Un juego interactivo donde el jugador debe adivinar el color correcto basado en un código RGB. Desarrollado con JavaScript puro y manipulación del DOM.
                </p>

                <div className="mt-4">
                  <a
                    href="https://github.com/maylimachi/color-game" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 w-fit transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577v-2.02c-3.338.726-4.043-1.416-4.043-1.416-.546-1.386-1.333-1.755-1.333-1.755-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.303 3.492.997.108-.776.42-1.303.763-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">HTML</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6">
              <img
                src="/todolist.png"
                alt="To-Do List"
                className="w-full md:w-60 h-40 object-cover rounded-xl border border-white/10"
              />

              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-white">📝 To-Do List</h3>
                <p className="text-gray-400 mt-2">
                  Aplicación de lista de tareas donde el usuario puede agregar, marcar y eliminar pendientes. Enfocada en la organización diaria.
                </p>

                <div className="mt-4">
                  <a
                    href="https://github.com/maylimachi/ToDoList" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 w-fit transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577v-2.02c-3.338.726-4.043-1.416-4.043-1.416-.546-1.386-1.333-1.755-1.333-1.755-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.303 3.492.997.108-.776.42-1.303.763-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">HTML</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-white/20 rounded-xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6">
              <img
                src="/servicios.png"
                alt="App de Servicios"
                className="w-full md:w-60 h-40 object-cover rounded-xl border border-white/10"
              />

              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-white">🔧 App de Servicios</h3>
                <p className="text-gray-400 mt-2">
                  Aplicación web grupal que permite buscar y filtrar profesionales según el servicio, con secciones dinámicas y modales personalizados.
                </p>

                <div className="mt-4">
                  <a
                    href="https://github.com/tuusuario/color-game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 w-fit transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577v-2.02c-3.338.726-4.043-1.416-4.043-1.416-.546-1.386-1.333-1.755-1.333-1.755-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.303 3.492.997.108-.776.42-1.303.763-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">HTML</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">CSS</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">Bootstrap</span>
                  <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

