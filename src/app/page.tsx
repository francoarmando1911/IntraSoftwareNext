import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import ServicesComponent from "@/components/ServicesComponent";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 text-white text-center bg-[url('/slider2.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="max-w-screen-lg w-full bg-black/70 p-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para revolucionar tu negocio?
          </h1>
          <h2 className="text-lg md:text-2xl font-light mb-6">
            A través de la innovación y el desarrollo de software, ayudamos a las empresas a alcanzar sus objetivos con mayor eficiencia.
          </h2>
          <Link
            href="/contactPage"
            className="bg-white text-red-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-red-300 transition duration-300"
          >
            ¡Contacta con nosotros!
          </Link>
        </div>
      </main>
      <ServicesComponent />
      <FooterComponent />
    </>
  );
}
