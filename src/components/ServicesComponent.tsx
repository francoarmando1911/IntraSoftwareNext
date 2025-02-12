import React from 'react';
import { services } from '@/data/services';

export default function ServicesComponent() {
    return (
        <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-green-500 text-white px-6 py-12">
            {/* Contenedor del título y descripción */}
            <div className="text-center max-w-3xl w-full">
                <h1 className="text-4xl sm:text-5xl font-bold">
                    Nuestros Servicios
                </h1>
                <p className="text-lg text-gray-200 mt-4 px-4">
                    Ofrecemos soluciones innovadoras en desarrollo de software para ayudar a las empresas a alcanzar sus objetivos con eficiencia.
                </p>
            </div>

            {/* Sección de servicios, ahora correctamente ubicada debajo */}
            <section className="w-full py-16 bg-gray-800 mt-12 rounded-xl">
                <div className="container mx-auto px-6 max-w-6xl rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-5xl mb-4">
                                        <service.icon /> {/* ✅ Se renderiza correctamente el icono */}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-400 text-sm">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
