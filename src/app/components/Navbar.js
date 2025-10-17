'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-950 shadow-lg">
      <div className="flex justify-between items-center px-6 sm:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">ML</div>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="text-gray-300 md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links - Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          <li><Link href="/" className="hover:text-blue-500 transition-colors">Inicio</Link></li>
          <li><Link href="/sobremi" className="hover:text-blue-500 transition-colors">Sobre mí</Link></li>
          <li><Link href="/certificaciones" className="hover:text-blue-500 transition-colors">Certificaciones</Link></li>
          <li><Link href="/proyectos" className="hover:text-blue-500 transition-colors">Proyectos</Link></li>
          <li><Link href="/contacto" className="hover:text-blue-500 transition-colors">Contacto</Link></li>
        </ul>
      </div>

      {/* Menú móvil tipo drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-gray-900 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-2/3 sm:w-1/2 flex flex-col items-start py-10 px-6 space-y-6 shadow-xl`}
      >
        <Link href="/" onClick={closeMenu} className="text-white text-xl font-medium hover:text-blue-400 transition-colors w-full">Inicio</Link>
        <Link href="/sobremi" onClick={closeMenu} className="text-white text-xl font-medium hover:text-blue-400 transition-colors w-full">Sobre mí</Link>
        <Link href="/certificaciones" onClick={closeMenu} className="text-white text-xl font-medium hover:text-blue-400 transition-colors w-full">Certificaciones</Link>
        <Link href="/proyectos" onClick={closeMenu} className="text-white text-xl font-medium hover:text-blue-400 transition-colors w-full">Proyectos</Link>
        <Link href="/contacto" onClick={closeMenu} className="text-white text-xl font-medium hover:text-blue-400 transition-colors w-full">Contacto</Link>
      </div>
    </nav>
  );
}

