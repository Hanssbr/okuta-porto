import arrow from "../assets/Arrow 1.png";
import backtext from "../assets/Rectangle.png";
import kaset from "../assets/Kasetcrop.png";
import rak from "../assets/rak.png";

export const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="flex justify-between">
          {/* bagian chp blank space */}
          <div className="flex font-slab items-center">
            <div className="">
              <h1 className="text-9xl font-slab">CHP-01-</h1>
              <img src={arrow} alt="arrow" className="w-[420px]" />
            </div>
            <div className="flex flex-col gap-5 text-5xl">
              <p className="">BLANK</p>
              <p className="">SPACE</p>
            </div>
          </div>
          {/* Bagian Block warna */}
          <div className="flex flex-col items-end gap-7">
            <div className="w-44 h-8 bg-green-smooth"></div>
            <div className="w-32 h-8 bg-yellow-fresh"></div>
            <div className="w-56 h-8 bg-purple-smooth"></div>
          </div>
        </div>
        <img
          src={kaset}
          alt="backtext"
          className="w-[50rem] absolute top-10 left-1/2 -translate-x-1/2"
        />
        <img
          src={backtext}
          alt="backtext"
          className="h-52 w-full mt-10 mb-15"
        />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="w-44 h-8 bg-green-smooth"></div>
            <div className="w-32 h-8 bg-yellow-fresh"></div>
            <div className="w-56 h-8 bg-purple-smooth"></div>
          </div>
          {/* Kumpulan Kaset */}
          <div className="flex mr-2h z-10">
            <div className="bg-blue-200 w-15 h-52 flex justify-center items-center rounded-md border-r-3">
              <div className="bg-black w-[70%] h-[80%] flex flex-col justify-between items-center py-2 rounded-4xl">
                <div className="bg-grey-smooth w-[70%] h-[18%] rounded-full"></div>
                <p className="text-white font-slab text-xl -rotate-90">home</p>
                <div className="bg-grey-smooth w-[70%] h-[18%] rounded-full"></div>
              </div>
            </div>
            <div className="bg-yellow-fresh w-15 h-52 flex justify-center items-center rounded-md border-r-3">
              <div className="bg-black w-[70%] h-[80%] flex flex-col justify-between items-center py-2 rounded-4xl">
                <div className="bg-grey-smooth w-[70%] h-[18%] rounded-full"></div>
                <p className="text-white font-slab text-xl -rotate-90">about</p>
                <div className="bg-grey-smooth w-[70%] h-[18%] rounded-full"></div>
              </div>
            </div>
            <div className="bg-green-smooth w-15 h-52 flex justify-center items-center rounded-md border-r-3">
              <div className="bg-black w-[70%] h-[80%] flex flex-col justify-between items-center py-2 rounded-4xl">
                <div className="bg-grey-smooth w-[70%] h-[18%] rounded-full"></div>
                <p className="text-white font-slab text-xl -rotate-90">work</p>
                <div className="bg-grey-smooth w-[70%] h-[18%] rounded-full"></div>
              </div>
            </div>
            <div className="bg-purple-smooth w-15 h-52 flex justify-center items-center rounded-md border-r-3">
              <div className="bg-black w-[70%] h-[80%] flex flex-col justify-between items-center py-2 rounded-4xl">
                <div className="bg-grey-smooth w-[70%] h-[18%] rounded-full"></div>
                <a
                  href="https://www.instagram.com/octaviandwiramadhan80/"
                  className="text-white font-slab text-xl -rotate-90"
                >
                  contact
                </a>
                <div className="bg-grey-smooth w-[70%] h-[18%] rounded-full"></div>
              </div>
            </div>
          </div>
          <img src={rak} alt="rak" className="absolute right-0 mt-[18px] z-0" />
        </div>
      </div>
    </>
  );
};
