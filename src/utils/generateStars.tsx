export const generateStars = (count: number) => {
  const stars = [];
  const starColours = ['#fbfbcb','#87fbf9','#FAA0A0','#c1ffe4'];

  for (let i = 0; i < count; i++) {
    // random position across the screen
    const x = Math.random() * 100; // viewport width
    const y = Math.random() * 100; // viewport height

    // 10% the star will be at size 6.5pt
    const size = Math.random() > 0.9 ? 6.5 : 2;
    
    // random opacity for the star
    const opacity = Math.random() * (1 - 0.4) + 0.4; 

    // pick a colour for the star
    const randomIndex = Math.floor(Math.random() * starColours.length)
    const chosenColour = starColours[randomIndex]

    stars.push(
      <div 
        key={i} 
        style={{
          position: 'absolute',
          left: `${x}vw`,
          top: `${y}vh`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: `${chosenColour}`,
          opacity: opacity,
          boxShadow: `0 0 ${size}px ${chosenColour}`, 
        }}
      />
    );
  }
  return stars;
};
