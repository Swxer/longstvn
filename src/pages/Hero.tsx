import HeroParallaxBackground from "../components/HeroParallaxBackground";
import HeroContent from "../components/HeroContent";

const Hero = () => {
  return (
    <div style={{ position: "relative", width: "100%", overflowX: "hidden" }}>
      <HeroParallaxBackground />

      <main style={{ position: "relative", zIndex: 10 }}>
        <div style={{ height: "100vh", pointerEvents: "none" }} />
        <HeroContent />
      </main>
    </div>
  );
};
export default Hero;
