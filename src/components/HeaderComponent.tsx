"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HeaderComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-[#000B54] text-white flex items-center justify-between px-6  shadow-md">
            <Link href="/">
                <Image src="/logoIntra1.png" alt="Logo" width={120} height={40} priority />
            </Link>

            {/* Título (oculto en móviles para más espacio) 
            <h1 className="hidden md:block text-lg sm:text-xl md:text-2xl font-semibold">
                Intra Software
            </h1>
            */}

            {/* Botón de menú hamburguesa (solo en móviles) */}
            <button
                className="md:hidden text-2xl focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav
                className={`absolute top-16 left-0 w-full bg-[#000B54] md:static md:w-auto md:flex md:space-x-4 transition-all duration-300 ${isOpen ? "block" : "hidden"
                    }`}
            >
                <ul className="flex flex-col md:flex-row items-center w-full md:w-auto">
                    <li>
                        <Link
                            href="/servicePage"
                            className="block md:inline px-4 py-3 hover:text-gray-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/workPage"
                            className="block md:inline px-4 py-3 hover:text-gray-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Trabajo
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="block md:inline px-4 py-3 hover:text-gray-300 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Sobre Nosotros
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
