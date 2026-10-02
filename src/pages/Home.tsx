import HeroParallaxBackground from "../components/hero/HeroParallaxBackground";
import MainContent from "../components/MainContent";

const Home = () => {
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
export default Home;
