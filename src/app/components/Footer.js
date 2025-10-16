
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from 'next/link';

export default function Navbar() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} May Limachi Todos los derechos reservados.</p>
            <div className="flex space-x-6">
                <a
                    href="https://github.com/maylimachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition text-3xl"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/mayra-limachi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition text-3xl"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:maylimachi18@gmail.com"
                    className="hover:text-blue-500 transition text-3xl"
                >
                    <HiOutlineMail />
                </a>
                <a
                    href="https://wa.me/5491126847064"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition text-3xl"
                >
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    </footer>
  );
}