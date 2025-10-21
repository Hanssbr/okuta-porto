import type React from "react";
import { useEffect, useRef } from "react";
import { Typed } from "react-typed"; // ✅ versi 2.x pakai named import

interface HeaderProps {
  title: string;
  color?: string;
  bg?: string;
}

export const Navbar: React.FC<HeaderProps> = ({
  title,
  bg = "bg-yellow-smooth",
  color,
}) => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Okuta Rokuta"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
      });

      // cleanup biar gak ngetik dobel pas re-render
      return () => typed.destroy();
    }
  }, []);

  return (
    <div className={`${bg} h-17 flex justify-between px-10 items-center`}>
      <div className="" id="home">
        <div className="h-11 w-44 bg-black rounded-md">
          <div
            className={`${color} w-44 h-12 flex justify-center items-center rounded-md transition-all duration-200 hover:scale-120 animate-kaset`}
          >
            <div className="bg-black w-[80%] h-[70%] flex justify-between items-center px-2 rounded-4xl border-t-4 border-white">
              <div className="bg-grey-smooth w-[18%] h-[70%] rounded-full border-2 border-white"></div>
              <p className="text-white font-slab text-xl">{title}</p>
              <div className="bg-grey-smooth w-[18%] h-[70%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="name" className="text-4xl font-slab underline">
        <span ref={typedRef}>Okuta Rokuta</span>
      </div>
    </div>
  );
};
