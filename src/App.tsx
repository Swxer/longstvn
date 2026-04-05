import { useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Lenis from "lenis";
import Hero from "./pages/Hero";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // adjust for more/less smoothing
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <Hero />;
}

export default App;
