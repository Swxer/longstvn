import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import sky from '../images/sky.png';
import city1 from '../images/city1.png' 
import city2 from '../images/city2.png'
import city3 from '../images/city3.png'
import city4 from '../images/city4.png'
import city5 from '../images/city5.png' 


const Hero = () => {
  
  // Reusable style to position the content at the bottom-center of its layer
  const cityLayerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end', // Aligns the image to the bottom
    justifyContent: 'center', // Centers the image horizontally
  };
  
  // Reusable image style to force it to scale up vertically
  const cityImageStyle: React.CSSProperties = {
      width: '100%',
      // This is the key change to make the image visually taller/bigger
      minHeight: '70%', 
      objectFit: 'cover', // Ensures the image covers the area without distortion (can crop)
      // If you prefer the image scale without being cropped, use 'contain' instead of 'cover'.
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
            factor={10}  
            style={{ 
              backgroundColor: DARK_COLOR,
              zIndex: 50,
            }}
          />

        </Parallax>
      </div>
    </>
  )
}

export default Hero