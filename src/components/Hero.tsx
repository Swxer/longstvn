import HeroParallaxBackground from "./HeroParallaxBackground";
import MainContent from "./MainContent";

const Hero = () => {
  return (
    <div style={{ position: "relative", width: "100%", overflowX: "hidden" }}>
      <HeroParallaxBackground />

      <main style={{ position: "relative", zIndex: 10 }}>
        <div style={{ height: "100vh", pointerEvents: "none" }} />
        <MainContent />
      </main>
    </div>
  );
};
export default Hero;
