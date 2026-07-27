import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import TechStack from "../components/TechStack";
import oiia from "../images/hero/oiia.gif";
import { Box } from "@mui/material";

const HeroContent = () => {
  return (
    <div
      style={{
        backgroundColor: "#010127",
        width: "100dvw",
        position: "relative",
        marginLeft: "calc(-50dvw + 50%)",
        display: "flex",
        flexDirection: "column",
        gap: "100px",
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
