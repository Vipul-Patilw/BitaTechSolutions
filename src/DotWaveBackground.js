import React, { useEffect, useRef } from 'react';

const DotWaveBackground = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const dotGap = 40; // distance between dots
    const rows = Math.floor(height / dotGap) + 2;
    const cols = Math.floor(width / dotGap) + 2;

    const dots = [];

    const mouse = { x: null, y: null };
    let time = 0;

    // Create grid of dots
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          baseX: x * dotGap,
          baseY: y * dotGap,
          x: x * dotGap,
          y: y * dotGap
        });
      }
    }

    // Mouse move
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      dots.forEach(dot => {
        const waveX = Math.sin(dot.baseY * 0.05 + time) * 5;
        const waveY = Math.cos(dot.baseX * 0.05 + time) * 5;

        let dx = mouse.x - dot.baseX;
        let dy = mouse.y - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let offsetX = 0;
        let offsetY = 0;

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100;
          offsetX = -Math.cos(angle) * force * 10;
          offsetY = -Math.sin(angle) * force * 10;
        }

        ctx.beginPath();
        ctx.arc(dot.baseX + waveX + offsetX, dot.baseY + waveY + offsetY, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#0d6efd'; // blue theme
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: 'white', // or any bg color
      }}
    />
  );
};

export default DotWaveBackground;
