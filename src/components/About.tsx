import { Navbar } from "./Navbar";
import arrow from "../assets/Arrow 1.png";
import octa from "../assets/bg-octa.png";
import octaImage from "../assets/gambar octa.png";
import antena from "../assets/antena.png";
import { useInView } from "../hooks/UseInView";

export const About = () => {
  const { ref, isVisible } = useInView<HTMLImageElement>();
  return (
    <>
      <div className="mt-14"></div>
      <div className="relative">
        <div className="bg-blue-smooth w-full h-[60rem] overflow-hidden relative">
          <Navbar title="About" bg="bg-pink-smooth" color="bg-yellow-smooth" />
          <div className="flex justify-between relative z-0 mb-20">
            {/* bagian chp blank space */}
            <div className="flex font-slab items-center">
              <div className="">
                <h1
                  className={`text-9xl font-slab animate-fade`}
                >
                  CHP-02-
                </h1>
                <img
                  src={arrow}
                  alt="arrow"
                  ref={ref}
                  className={`w-[420px] ${isVisible ? "animate-inFade" : null}`}
                />
              </div>
              <div className="flex flex-col gap-5 text-5xl animate-fade">
                <p className="">ABOUT</p>
                <p className="">ME</p>
              </div>
            </div>
            {/* Content */}
            <img src={octa} alt="octa" className="absolute w-full z-0" />
          </div>
          <div className="flex w-full justify-center items-center gap-12 z-10 relative">
            <img src={antena} alt="anten" className="absolute bottom-[400px] right-50"/>
            <div className="w-2/3 h-[30rem] bg-black flex justify-evenly items-center rounded-2xl">
              <div className="h-96 w-96 rounded-full bg-yellow-smooth overflow-hidden flex justify-center items-center">
                <img src={octaImage} alt="octa imeg" className="w-[95%]"/>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-96 h-14 bg-yellow-smooth flex justify-center items-center rounded-md">
                  <div className="w-[90%] h-[70%] bg-black flex justify-center items-center gap-10">
                    <div className="w-1/12 h-2/3 bg-grey-smooth rounded-full"></div>
                    <p className="text-xl font-slab text-white">About Me</p>
                    <div className="w-1/12 h-2/3 bg-grey-smooth rounded-full"></div>
                  </div>
                </div>
                <div className="w-96 h-80 bg-yellow-smooth flex justify-center items-center p-4 rounded-md">
                    <p className="text-xl font-slab text-center">Hello, I am Octavian Dwi Ramadhan, a computer engineering student at Diponegoro University. I am interested in programming and design. To me, designing and programming are platforms that allow me to bring my ideas to life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
