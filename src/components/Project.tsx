import React from "react";
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
          <div className="w-[80%] mx-auto">
            <div className="flex-col flex w-full justify-center items-center md:pl-[20rem] lg:pl-[29rem] pt-23 relative z-10">
              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="text-5xl font-slab">Latest Project</h1>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 md:gap-y-2 lg:gap-y-5 md:w-[40rem] lg:w-[50rem] h-[25rem] md:h-[30rem lg:h-[30rem]">
                  <div className="w-[70%] h-[70%] border-2 border-black rounded-md">
                    <img
                      src={rak}
                      alt="rak buku"
                      className="w-full h-full bg-cover"
                    />
                  </div>
                  <div className="w-[70%] h-[70%] border-2 border-black rounded-md">
                    <img
                      src={kaset}
                      alt="kaset"
                      className="w-full h-full bg-cover"
                    />
                  </div>
                  <div className="w-[70%] h-[70%] border-2 border-black rounded-md"></div>
                  <div className="w-[70%] h-[70%] border-2 border-black rounded-md"></div>
                </div>
              </div>
              {/* Gambar tiket */}
            </div>
            <div className="flex justify-center items-center h-[1rem] pb-16">
              <img
                src={tiket}
                alt="tiket"
                className="w-10% h-10% absolute top-72"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
