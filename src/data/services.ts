import { FaCloud, FaCode, FaMobile } from "react-icons/fa"
import { FaWebAwesome } from "react-icons/fa6"

export const services = [
    {
        icon: FaCode,
        title: "Landing Page",
        description: "Transforma tu presencia onliine con una landing page diseñada a medida para tu negocio o emprendimiento"
    },
    {
        icon: FaMobile,
        title: "Desarrollo de E-commerce a medida",
        description: "Desarrollamos soluciones para que tu negocio en línea ofrezca una experiencia fluida y segura para tus clientes."
    },
    {
        icon: FaWebAwesome,
        title: "Web apps",
        description: "Desarrollo de web apps con diseños a tu medida y responsive para que se puedan utilizar en cualquier dispositivo."
    },
    {
        icon: FaCloud,
        title: "Desarrollo de software empresarial",
        description: "Con formularios intuitivos, llamadas a la acción claras y un diseño que destaca, tus campañas de marketing digital lograrán su máximo rendimiento."
    }
]

/* 
Cuando renderice estos servicios en el componente, ahi tengo que agregar los estilos para los iconos, Ejemplo:

{services.map((service, index) => (
    <div key={index}>
        <service.icon className="text-4xl mb-4 text-blue-500" />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
    </div>
))}


*/