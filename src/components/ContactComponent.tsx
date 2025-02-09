import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <>
            <section id="contact" className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Contacto</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
                        <a
                            href="mailto:francoarmando2002@gmail.com"
                            className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <FaEnvelope className="text-2xl" />
                            <span>Email</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/franco-armando/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 bg-blue-800 hover:bg-blue-900 px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <FaLinkedin className="text-2xl" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://wa.me/3442310036"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <FaWhatsapp className="text-2xl" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
