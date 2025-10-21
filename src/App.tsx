import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import SummonImage from "./components/Summon";

const App = () => {
  return (
    <>
      <div className="hidden md:block">
        <SummonImage />
        <div className="relative z-10">
          <Navbar title="home" bg="bg-yellow-smooth" color="bg-blue-smooth" id="#home"/>
        </div>
        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
