import { useEffect } from "react";

import "./App.css";
import Lenis from "lenis";
import Hero from "./components/Hero";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    window.addEventListener("load", () => lenis.resize());

    return () => lenis.destroy();
  }, []);

  return <Hero />;
}

export default App;
