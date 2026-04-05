import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import TechStack from "../components/TechStack";
// import Oiia from "../assets/oiia.gif";

const HeroContent = () => {
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
        // paddingBottom: "50px",
      }}
    >
      <TechStack />
      <ProjectSection />
      {/* <img src={Oiia} alt="Oiia" /> */}
      <Footer />
    </div>
  );
};

export default HeroContent;
