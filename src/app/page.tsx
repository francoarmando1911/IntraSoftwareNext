import FirstPage from "@/components/FirstPageComponent";
import FooterComponent from "@/components/FooterComponent";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden flex items-center justify-center min-h-screen bg-gradient-to-r from-red-700 to-red-900 text-white text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Listo para revolucionar tu negocio?
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-6">
            A través de la innovación y el desarrollo de software, ayudamos a las empresas a alcanzar sus objetivos con mayor eficiencia.
          </h2>
          <Link href="/contactPage" className="bg-white text-red-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-red-300 transition duration-300">
            Contacta con nosotros!
          </Link>
        </div>
      </div>
      <FirstPage/>
      <FooterComponent/>
    </>
  );
}
