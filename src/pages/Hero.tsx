import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { generateStars } from '../utils/generateStars'
import  ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'
import sky from '../images/hero/sky.png';
import city1 from '../images/hero/city1.png' 
import city2 from '../images/hero/city2.png'
import city3 from '../images/hero/city3.png'
import city4 from '../images/hero/city4.png'
import city5 from '../images/hero/city5.png' 
import moon from '../images/hero/moon.png'
import type React from 'react';

const Hero = () => {
  
  const cityLayerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end', // aligns the image to the bottom
    justifyContent: 'center', // centers the image horizontally
  };
  
  const cityImageStyle: React.CSSProperties = {
    width: '100%',
    // change here to make the buildings bigger/smaller
    minHeight: '70%', 
    objectFit: 'cover', 
    // ensures the image covers the area without distortion (can crop)
    // if you prefer the image scale without being cropped, use 'contain' instead of 'cover'.
  }

  const moonStyle: React.CSSProperties = {
    position: 'absolute',
    left: '85vw',
    top: '5vh',
    width: '120px',
    height: 'auto',
    opacity: 0.9,
  }

	const DARK_COLOR = '#010127'; 

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}> 
        <Parallax pages={4}>

          <ParallaxLayer 
            offset={0} 
            speed={0.1}
            factor={1.0} // sets the layer height to exactly 1 viewport
            style={{
              backgroundImage: `url(${sky})`,
              backgroundSize: 'cover', // ensures it covers the viewport area
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/*CITY LAYERS - change factor and minHeight to make them bigger */}
          <ParallaxLayer 
            offset={0} 
            speed={0.2} 
            factor={1} // give the image the viewport height to work with
            style={{ ...cityLayerStyle, zIndex: 10 }}
          >
            <img src={city1} alt="Farthest City" style={{ ...cityImageStyle }} 
						/> 
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0} 
            speed={0.3} 
            factor={1}
            style={{ ...cityLayerStyle, zIndex: 20 }}
          >
            <img src={city2} alt="Far City" style={{ ...cityImageStyle }} />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0} 
            speed={0.4} 
            factor={1}
            style={{ ...cityLayerStyle, zIndex: 30 }}
          >
            <img src={city3} alt="Middle City" style={{ ...cityImageStyle }} />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0} 
            speed={0.6} 
            factor={1}
            style={{ ...cityLayerStyle, zIndex: 40 }}
          >
            <img src={city4} alt="Close City" style={{ ...cityImageStyle }} />
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0} 
            speed={0.8} 
            factor={1}
            style={{ ...cityLayerStyle, zIndex: 50 }}
          >
            <img src={city5} alt="Closest City" style={{ ...cityImageStyle }} />
          </ParallaxLayer>

					<ParallaxLayer 
            offset={0.999} // start just before the first page ends (to ensure no gap)
            speed={0.8}   
            factor={0}  
            style={{ 
              backgroundColor: DARK_COLOR,
              zIndex: 50,
              display: 'block',
            }}
          >
              <ProjectSection />
              <Footer />
          </ParallaxLayer>

          <ParallaxLayer
            speed={0} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              zIndex: 15, 
              color: 'white',
              paddingBottom: 250, 
              fontFamily: "'Jersey 15', sans-serif",
              fontSize: '2vw',
              fontWeight: 700,
              textShadow: '0 0 10px #FF69B4, 0 0 20px #FF69B4, 0 0 30px #6f00ffff, 0 0 40px #FF69B4, 0 0 70px #FF69B4, 0 0 80px #FF69B4, 0 0 100px #FF69B4, 0 0 150px #FF69B4',
            }}
          >
            <h1>Steven Long Nguyen</h1>
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0} 
            speed={0.15}
            factor={1.0}
            style={{
              zIndex: 2,
            }}
          >
            {generateStars(300)} 
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0} 
            factor={1}
            style={{ 
              zIndex: 3, 
            }}
          >
            <img src={moon} alt="Moon" style={{ ...moonStyle }} />
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  )
}

export default Hero