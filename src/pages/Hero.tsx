import HeroParallaxBackground from "../components/HeroParallaxBackground";
import HeroContent from "../components/HeroContent";

const Hero = () => {
  return (
    <div style={{ position: "relative", width: "100%", overflowX: "hidden" }}>
      <HeroParallaxBackground />

      <main style={{ position: "relative", zIndex: 10 }}>
        {/* Transparent Spacer: Keeps the city visible until user scrolls */}
        <div style={{ height: "100vh", pointerEvents: "none" }} />
        <HeroContent />
      </main>
    </div>
  );
};
export default Hero;
