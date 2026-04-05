import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { generateStars } from "../utils/generateStars";
import sky from "../images/hero/sky.png";
import city1 from "../images/hero/city1.png";
import city2 from "../images/hero/city2.png";
import city3 from "../images/hero/city3.png";
import city4 from "../images/hero/city4.png";
import city5 from "../images/hero/city5.png";
import moon from "../images/hero/moon.png";
import type { MotionStyle } from "motion";

const HeroParallaxBackground = () => {
  const { scrollY } = useScroll();

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 150,
    damping: 25,
    mass: 0.1,
  });

  const scrollEndPoint = 800; // Adjust this value based on how far you want the parallax to affect

  // Mapping scroll (0 to 800px) to movement
  const skyY = useTransform(smoothScrollY, [0, scrollEndPoint], [0, -35]);
  const moonY = useTransform(smoothScrollY, [0, scrollEndPoint], [0, -50]);

  // City layers (slow to fast)
  const city1Y = useTransform(smoothScrollY, [0, scrollEndPoint], [0, -390]);
  const city2Y = useTransform(smoothScrollY, [0, scrollEndPoint], [0, -490]);
  const city3Y = useTransform(smoothScrollY, [0, scrollEndPoint], [0, -590]);

  // YOUR NAME: Give it a speed between City 3 and City 4
  const nameY = useTransform(smoothScrollY, [0, scrollEndPoint], [0, -200]);
  const nameOpacity = useTransform(
    smoothScrollY,
    [0, scrollEndPoint / 2],
    [1, 1],
  ); // Fades out as you scroll

  const city4Y = useTransform(smoothScrollY, [0, scrollEndPoint], [0, -690]);
  const city5Y = useTransform(smoothScrollY, [0, scrollEndPoint], [0, -800]);
  const starsY = useTransform(smoothScrollY, [0, scrollEndPoint], [0, -40]);

  const cityScaleSize = 0.7;

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
    // objectPosition: "top",
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
      <motion.div style={{ position: "absolute", width: "100%", y: starsY }}>
        {generateStars(300)}
      </motion.div>
      <motion.img
        src={moon}
        style={{
          y: moonY,
          position: "absolute",
          right: "10%",
          top: "5%",
          width: "120px",
        }}
      />

      {/* Back Cities */}
      <motion.img
        src={city1}
        style={{
          ...layerStyle,
          y: city1Y,
          x: "-50%", // Keep this here to maintain centering with the scale
          zIndex: 1,
          scale: cityScaleSize,
          transformOrigin: "bottom",
        }}
      />
      <motion.img
        src={city2}
        style={{
          ...layerStyle,
          y: city2Y,
          x: "-50%", // Keep this here to maintain centering with the scale
          zIndex: 2,
          scale: cityScaleSize,
          transformOrigin: "bottom",
        }}
      />
      <motion.img
        src={city3}
        style={{
          ...layerStyle,
          y: city3Y,
          x: "-50%", // Keep this here to maintain centering with the scale
          zIndex: 3,
          scale: cityScaleSize,
          transformOrigin: "bottom",
        }}
      />

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
          opacity: nameOpacity,
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

      {/* Front Cities (They will cover the bottom of your name as they rise) */}
      <motion.img
        src={city4}
        style={{
          ...layerStyle,
          y: city4Y,
          x: "-50%", // Keep this here to maintain centering with the scale
          zIndex: 5,
          scale: cityScaleSize,
          transformOrigin: "bottom",
        }}
      />
      <motion.img
        src={city5}
        style={{
          ...layerStyle,
          y: city5Y,
          x: "-50%", // Keep this here to maintain centering with the scale
          zIndex: 6,
          scale: cityScaleSize,
          transformOrigin: "bottom",
        }}
      />
    </div>
  );
};

export default HeroParallaxBackground;
