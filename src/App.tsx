import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

const App = () => {
  return (
    <>
      <Navbar title="home" bg="bg-yellow-smooth" color="bg-blue-smooth"/>
      <Hero />
      <About />
    </>
  );
};

export default App;
