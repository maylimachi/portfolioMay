'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Iconos de menú

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-950 shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
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

        {/* Links - Versión Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          <li><Link href="/" className="hover:text-blue-600">Inicio</Link></li>
          <li><Link href="/sobremi" className="hover:text-blue-600">Sobre mí</Link></li>
          <li><Link href="/certificaciones" className="hover:text-blue-600">Certificaciones</Link></li>
          <li><Link href="/proyectos" className="hover:text-blue-600">Proyectos</Link></li>
          <li><Link href="/contacto" className="hover:text-blue-600">Contacto</Link></li>
        </ul>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-gray-900 md:hidden text-gray-300 font-medium space-y-4 py-6">
          <li><Link href="/" onClick={closeMenu} className="hover:text-blue-600">Inicio</Link></li>
          <li><Link href="/sobremi" onClick={closeMenu} className="hover:text-blue-600">Sobre mí</Link></li>
          <li><Link href="/certificaciones" onClick={closeMenu} className="hover:text-blue-600">Certificaciones</Link></li>
          <li><Link href="/proyectos" onClick={closeMenu} className="hover:text-blue-600">Proyectos</Link></li>
          <li><Link href="/contacto" onClick={closeMenu} className="hover:text-blue-600">Contacto</Link></li>
        </ul>
      )}
    </nav>
  );
}

