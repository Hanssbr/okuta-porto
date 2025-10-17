import type React from "react";

interface HeaderProps {
    title: string
    color?: string
    bg? : string
}

export const Navbar: React.FC<HeaderProps> = ({
    title, bg = "bg-yellow-smooth", color
}) => {
  return (
    <>
      <div className={`${bg} h-17 flex justify-between px-10 items-center`}>
        <div className="" id="home">
          <div className={`${color} w-44 h-12 flex justify-center items-center rounded-md transition-all duration-200 hover:scale-120`}>
            <div className="bg-black w-[80%] h-[70%] flex justify-between items-center px-2 rounded-4xl">
              <div className="bg-grey-smooth w-[18%] h-[70%] rounded-full"></div>
              <p className="text-white font-slab text-xl">{title}</p>
              <div className="bg-grey-smooth w-[18%] h-[70%] rounded-full"></div>
            </div>
          </div>
        </div>
        <div id="name">
          <h1 className="text-4xl font-slab underline">Okuta Rokuta</h1>
        </div>
      </div>
    </>
  );
};
