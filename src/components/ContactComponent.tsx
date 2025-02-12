import React from 'react';
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6">
            <div className="flex flex-col items-center text-center w-full max-w-4xl p-10 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg">
                <h2 className="text-5xl font-bold mb-6">Contacto</h2>
                <p className="text-lg text-gray-300 mb-8">
                    Puedes comunicarte con nosotros a través de cualquiera de estos medios:
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-6">
                    <ContactButton
                        href="mailto:francoarmando2002@gmail.com"
                        icon={<FaEnvelope />}
                        text="Email"
                        bgColor="bg-blue-600"
                        hoverColor="hover:bg-blue-700"
                    />
                    <ContactButton
                        href="https://www.linkedin.com/in/franco-armando/"
                        icon={<FaLinkedin />}
                        text="LinkedIn"
                        bgColor="bg-blue-800"
                        hoverColor="hover:bg-blue-900"
                    />
                    <ContactButton
                        href="https://wa.me/3442310036"
                        icon={<FaWhatsapp />}
                        text="WhatsApp"
                        bgColor="bg-green-600"
                        hoverColor="hover:bg-green-700"
                    />
                </div>
            </div>
        </section>
    );
}

function ContactButton({ href, icon, text, bgColor, hoverColor }: { href: string; icon: React.ReactNode; text: string; bgColor: string; hoverColor: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center space-x-3 ${bgColor} ${hoverColor} px-6 py-4 w-64 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md`}
        >
            <span className="text-2xl">{icon}</span>
            <span className="text-lg font-medium">{text}</span>
        </a>
    );
}
