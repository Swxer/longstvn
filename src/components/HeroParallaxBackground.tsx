import { motion } from "framer-motion";
import { StarCanvas } from "../utils/generateStars";
import sky from "../images/hero/sky.png";
import city1 from "../images/hero/city1.png";
import city2 from "../images/hero/city2.png";
import city3 from "../images/hero/city3.png";
import city4 from "../images/hero/city4.png";
import city5v2 from "../images/hero/city5-2.png";
import moon from "../images/hero/moon.png";
import type { MotionStyle } from "motion";
import { useParallaxScroll } from "../hooks/useParallaxScroll";

const HeroParallaxBackground = () => {
  const { city1Y, city2Y, city3Y, city4Y, city5Y, nameY, skyY, moonY, starsY } =
    useParallaxScroll();

  const cityScaleSize = 0.7;

  const backCities = [
    { src: city1, y: city1Y, zIndex: 1 },
    { src: city2, y: city2Y, zIndex: 2 },
    { src: city3, y: city3Y, zIndex: 3 },
  ];

  const layerStyle: MotionStyle = {
    position: "absolute",
    bottom: 0,
    left: "50%", // Anchor to the horizontal center
    x: "-50%", // Framer Motion shorthand for translateX(-50%)
    height: "100%", // Maintain full height
    width: "auto", // Let width expand naturally beyond screen edges
    objectFit: "cover", // Use cover or fill to ensure no gaps
    imageRendering: "pixelated", // Crucial for Steven's pixel art style
  };

  const skyStyle: React.CSSProperties = {
    ...layerStyle,
    bottom: "auto",
    top: 0,
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        backgroundColor: "#010127",
        overflow: "hidden",
      }}
    >
      <motion.img src={sky} style={{ ...skyStyle, y: skyY }} />
      {/* Stars Layer */}
      <motion.div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", y: starsY }}>
        <StarCanvas />
      </motion.div>
      <motion.img
        src={moon}
        style={{
          y: moonY,
          position: "absolute",
          right: "10%",
          top: "5%",
          width: "120px",
          imageRendering: "pixelated",
        }}
      />

      {backCities.map(({ src, y, zIndex }) => (
        <motion.img
          key={zIndex}
          src={src}
          style={{
            ...layerStyle,
            y,
            x: "-50%",
            zIndex,
            scale: cityScaleSize,
            transformOrigin: "bottom",
          }}
        />
      ))}

      {/* THE SANDWICHED NAME (Between City 3 and 4) */}
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "30vh",
          zIndex: 1, // Higher than city 3, lower than city 4
          y: nameY,
          color: "white",
          fontFamily: "'Jersey 15', sans-serif",
          fontSize: "2vw", // Adjust size for better fit
          textShadow:
            "0 0 10px #FF69B4, 0 0 20px #FF69B4, 0 0 30px #6f00ffff, 0 0 40px #FF69B4, 0 0 70px #FF69B4, 0 0 80px #FF69B4, 0 0 100px #FF69B4, 0 0 150px #FF69B4",
          pointerEvents: "none", // Ensures you can still click things behind it
        }}
      >
        <h1>Steven Long Nguyen</h1>
      </motion.div>

      {/* Front City (covers the bottom of the name as it rises) */}
      <motion.img
        src={city4}
        style={{
          ...layerStyle,
          y: city4Y,
          x: "-50%",
          zIndex: 5,
          scale: cityScaleSize,
          transformOrigin: "bottom",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "-95vh",
          left: 0,
          right: 0,
          height: "120vh", // viewport-relative height
          zIndex: 6,
          y: city5Y, // keep parallax
          backgroundImage: `url(${city5v2})`,
          backgroundSize: "auto 145%", // auto width, full height
          backgroundPosition: "center 80%",
          minWidth: "100vw", // ensures coverage
          width: "100%", // fallback
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
};

export default HeroParallaxBackground;
