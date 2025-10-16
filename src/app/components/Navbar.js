import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-950 shadow-md fixed w-full top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">ML</div>
      <ul className="flex space-x-6 text-gray-300 font-medium">
        <li><Link href="/" className="hover:text-blue-600">Inicio</Link></li>
        <li><Link href="/sobremi" className="hover:text-blue-600">Sobre mí</Link></li>
        <li><Link href="/certificaciones" className="hover:text-blue-600">Certificaciones</Link></li>
        <li><Link href="/proyectos" className="hover:text-blue-600">Proyectos</Link></li>
        <li><Link href="/contacto" className="hover:text-blue-600">Contacto</Link></li>
      </ul>
    </nav>
  );
}
