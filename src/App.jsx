import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Page2 from "./components/Page2";
import Blank from "./components/Blank";
import Lenis from "lenis";

const App = () => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="h-full w-full font-[NeueFont] bg-zinc-100">
      <Navbar />
      <Hero />
      <Page2 />
      <Blank />
    </div>
  );
};

export default App;
