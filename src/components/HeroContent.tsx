import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import TechStack from "../components/TechStack";
import oiia from "../images/hero/oiia.gif";
import { Box } from "@mui/material";
// import { motion } from "framer-motion";
// import { useParallaxScroll } from "../hooks/useParallaxScroll";

const HeroContent = () => {
  // const { heroContentY } = useParallaxScroll();

  return (
    <div
      style={{
        backgroundColor: "#010127",
        width: "100vw", // Force full viewport width
        position: "relative",
        left: "50%", // Center hack for parents with padding
        right: "50%",
        marginLeft: "-50vw", // Pulls the div to the absolute left edge
        marginRight: "-50vw", // Pulls the div to the absolute right edge
        display: "flex",
        flexDirection: "column",
        gap: "100px",
        // y: heroContentY, // Parallax effect for the entire content
        // paddingBottom: "50px",
      }}
    >
      <TechStack />
      <ProjectSection />
      <Box
        sx={{
          // width: "100%",
          // minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // py: 10,
          margin: "0 auto",
        }}
      >
        <img
          src={oiia}
          alt="spinning cat"
          style={{
            maxWidth: "90%",
            maxHeight: "100%",
            height: "auto",
            objectFit: "contain",
            margin: "auto",
            display: "block",
          }}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default HeroContent;
