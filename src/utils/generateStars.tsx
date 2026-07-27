import { useRef, useEffect } from "react";

const STAR_COLOURS = ["#fbfbcb", "#87fbf9", "#FAA0A0", "#c1ffe4"];
const STAR_COUNT = 300;

export const StarCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < STAR_COUNT; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() > 0.9 ? 6.5 : 2;
      const opacity = Math.random() * 0.6 + 0.4;
      const colour = STAR_COLOURS[Math.floor(Math.random() * STAR_COLOURS.length)];

      ctx.globalAlpha = opacity;
      ctx.shadowBlur = size;
      ctx.shadowColor = colour;
      ctx.fillStyle = colour;
      ctx.fillRect(x, y, size, size);
    }

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};
