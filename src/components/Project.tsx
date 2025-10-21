import { Navbar } from "./Navbar";
import { useInView } from "../hooks/UseInView";
import arrow from "../assets/Arrow 1.png";
import tiket from "../assets/Ticket Project.png";
import rak from "../assets/rak.png";
import kaset from "../assets/kaset.png";

export const Project = () => {
  const { ref, isVisible } = useInView<HTMLImageElement>();
  return (
    <>
      <div className="relative z-10">
        <div className="relative z-20">
          <Navbar title="About" bg="bg-purple-smooth" color="bg-green-smooth" />
        </div>
        <div className="bg-green-smooth">
          {/* bagian chp blank space */}
          <div className="flex font-slab items-center">
            <div className="">
              <h1 className={`text-9xl font-slab animate-fade`}>CHP-02-</h1>
              <img
                src={arrow}
                alt="arrow"
                ref={ref}
                className={`w-[420px] ${isVisible ? "animate-inFade" : null}`}
              />
            </div>
            <div className="flex flex-col gap-5 text-5xl animate-fade">
              <p className="">WORK</p>
              <p className="">PROJECT</p>
            </div>
          </div>

          {/* Box Project */}
          <div className="flex justify-center items-center">
            <div
              id="kaset_project_container"
              className="w-[80%] h-[35rem] flex justify-center items-center"
            >
              <div className="h-[95%] w-[90%] relative">
                <img src={tiket} alt=""  className="absolute z-0"/>
              <div className="h-full w-full relative z-10 flex flex-col">
                <div className="h-[12%] font-slab text-5xl flex justify-center items-end">
                    <h1>Latest Project</h1>
                </div>
                <div className="w-full h-[60%] flex flex-wrap justify-end items-end mt-[10] md:hidden lg:flex">
                    <div className="w-[71%] h-[85%] gap-10 flex flex-wrap justify-center">
                        <div className="w-[37%] h-1/2 border-2 border-black rounded-md"></div>
                        <div className="w-[37%] h-1/2 border-2 border-black rounded-md"></div>
                        <div className="w-[37%] h-1/2 border-2 border-black rounded-md"></div>
                        <div className="w-[37%] h-1/2 border-2 border-black rounded-md"></div>
                    </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
