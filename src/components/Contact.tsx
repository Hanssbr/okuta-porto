import { Navbar } from "./Navbar";
import { useInView } from "../hooks/UseInView";
import arrow from "../assets/Arrow 1.png";
import kamera from "../assets/Kamera.png";
import fb from "../assets/fb logo.png";
import ig from "../assets/ig logo.png";
import mail from "../assets/mail logo.png";
import foto from "../assets/foto 1.png";

export const Contact = () => {
  const { ref, isVisible } = useInView<HTMLImageElement>();
  return (
    <>
      <div className="bg-purple-smooth h-[55rem] overflow-hidden" id="contact">
        <div className="relative z-10">
          <Navbar
            title="About"
            bg="bg-yellow-smooth"
            color="bg-purple-smooth"
            id="contact"
          />
        </div>
        {/* bagian chp blank space */}
        <div className="flex font-slab items-center">
          <div className="">
            <h1 className={`text-9xl font-slab animate-fade`}>CHP-04-</h1>
            <img
              src={arrow}
              alt="arrow"
              ref={ref}
              className={`w-[420px] ${isVisible ? "animate-inFade" : null}`}
            />
          </div>
          <div className="flex flex-col gap-5 text-5xl animate-fade">
            <p className="">CONTACT</p>
            <p className="">ME</p>
          </div>
        </div>

        {/* Contacts */}

        <div className="flex justify-evenly gap-60 mt-5">
          <div className="h-[35rem] w-50% flex items-center">
            <div className="w-[20rem] h-[30rem] bg-white rounded-xl font-slab">
              <h1 className="text-3xl p-2 text-center font-bold">ID CARD</h1>
              <div className="flex items-center justify-center text-2xl font-bold">
                <p className="-rotate-90">OCTA</p>
                <img src={foto} alt="foto" className="w-[230px] h-[312px]" />
                <p className="rotate-90">OCTA</p>
              </div>
              <p className="text-center text-xl">octavian dwi ramadhan</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col font-slab text-2xl justify-center gap-4">
              <a
                href="https://www.facebook.com/okuta.rokuta"
                target="_blank"
                className="flex flex-row items-center gap-4"
              >
                <img src={fb} alt="fb" className="w-10 h-10" />
                <p className="hover:text-purple-200">okutarokuta</p>
              </a>
              <a
                href="https://www.instagram.com/octaviandwiramadhan80/"
                target="_blank"
                className="flex flex-row items-center gap-4"
              >
                <img src={ig} alt="fb" className="w-10 h-10" />
                <p className="hover:text-purple-200">octaviandwiramadhan80</p>
              </a>
              <a
                href="https://workspace.google.com/intl/id/gmail/"
                target="_blank"
                className="flex flex-row items-center gap-4"
              >
                <img src={mail} alt="fb" className="w-10 h-10" />
                <p className="hover:text-purple-200">
                  @octaviandwiramadhan80@gmail.com
                </p>
              </a>
              <img src={kamera} alt="kamera" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
