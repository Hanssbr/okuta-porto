export const Navbar = () => {
  return (
    <>
      <div className="bg-yellow-smooth h-17 flex justify-between px-10 items-center border-t-2 border-black">
        <div className="" id="home">
          <div className="bg-blue-200 w-44 h-12 flex justify-center items-center rounded-md transition-all duration-200 hover:scale-120">
            <div className="bg-black w-[80%] h-[70%] flex justify-between items-center px-2 rounded-4xl">
              <div className="bg-grey-smooth w-[18%] h-[70%] rounded-full"></div>
              <p className="text-white font-slab text-xl">home</p>
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
