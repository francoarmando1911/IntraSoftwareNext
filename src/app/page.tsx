import FirstPage from "@/components/FirstPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full h-screen relative">
      <picture>
        <source
          media="(min-width: 700px)"
          srcSet="sliderDesktop.png"
        />
        <Image
          src="/sliderPhone.png"
          alt="Slider"
          layout="fill"
          objectFit="cover"
          priority
        />
      </picture>
    </div>
    <FirstPage/>
    </>
  );
}
