import { useScroll, useTransform } from "framer-motion";

export const useParallaxScroll = () => {
  const { scrollY } = useScroll();

  const scrollEndPoint = 800; // Adjust this value based on how far you want the parallax to affect

  // Mapping scroll (0 to 800px) to movement
  const skyY = useTransform(scrollY, [0, scrollEndPoint], [0, -35], {
    clamp: false,
  });
  const moonY = useTransform(scrollY, [0, scrollEndPoint], [0, -50], {
    clamp: false,
  });

  // City layers (slow to fast)
  const city1Y = useTransform(scrollY, [0, scrollEndPoint], [0, -390], {
    clamp: false,
  });
  const city2Y = useTransform(scrollY, [0, scrollEndPoint], [0, -490], {
    clamp: false,
  });
  const city3Y = useTransform(scrollY, [0, scrollEndPoint], [0, -590], {
    clamp: false,
  });
  const nameY = useTransform(scrollY, [0, scrollEndPoint], [0, -200], {
    clamp: false,
  });

  const city4Y = useTransform(scrollY, [0, scrollEndPoint], [0, -690], {
    clamp: false,
  });
  const city5Y = useTransform(scrollY, [0, scrollEndPoint], [0, -800], {
    clamp: false,
  });
  const starsY = useTransform(scrollY, [0, scrollEndPoint], [0, -40], {
    clamp: false,
  });
  const heroContentY = useTransform(scrollY, [0, scrollEndPoint], [0, -40], {
    clamp: false,
  });

  return {
    scrollY,
    city1Y,
    city2Y,
    city3Y,
    city4Y,
    city5Y,
    nameY,
    skyY,
    moonY,
    starsY,
    heroContentY,
  };
};
