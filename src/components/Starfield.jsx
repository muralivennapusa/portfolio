import { useEffect, useRef, useState } from 'react';

const Starfield = ({ darkMode }) => {
  const canvasRef = useRef();
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  const STAR_COUNT = 120;
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  // Initial stars
  useEffect(() => {
    const newStars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * WIDTH,
      y: Math.random() * HEIGHT,
      radius: Math.random() * 1.2 + 0.5,
      alpha: Math.random(),
      baseX: 0,
      baseY: 0,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
      twinkle: Math.random() * 0.05 + 0.01
    }));
    setStars(newStars);
  }, []);

  // Shooting stars
  useEffect(() => {
    const interval = setInterval(() => {
      const angle = Math.random() * Math.PI / 4;
      setShootingStars(prev => [
        ...prev,
        {
          x: Math.random() * WIDTH,
          y: 0,
          length: Math.random() * 80 + 100,
          speed: Math.random() * 4 + 6,
          angle,
          life: 0,
        }
      ]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX / WIDTH - 0.5;
      mouse.current.y = e.clientY / HEIGHT - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sparkle on click
  const handleClick = (e) => {
    const { clientX: x, clientY: y } = e;
    const sparkle = Array.from({ length: 8 }, () => ({
      x,
      y,
      radius: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      alpha: 1,
    }));
    setStars(prev => [...prev, ...sparkle]);
  };

  // Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    const draw = () => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      const color = darkMode ? '255, 255, 255' : '0, 0, 0';

      stars.forEach(star => {
        const parallaxX = mouse.current.x * 20;
        const parallaxY = mouse.current.y * 20;

        star.x += star.dx + parallaxX * 0.01;
        star.y += star.dy + scrollY.current * 0.0001 + parallaxY * 0.01;

        star.alpha += star.twinkle * (Math.random() > 0.5 ? 1 : -1);
        star.alpha = Math.max(0.1, Math.min(1, star.alpha));

        if (star.x < 0 || star.x > WIDTH) star.dx *= -1;
        if (star.y < 0 || star.y > HEIGHT) star.dy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${star.alpha})`;
        ctx.fill();
      });

      setShootingStars(prev =>
        prev
          .map(star => {
            const x = star.x + star.speed * Math.cos(star.angle);
            const y = star.y + star.speed * Math.sin(star.angle);
            star.life += 1;

            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(x, y);
            ctx.strokeStyle = `rgba(${color}, 0.8)`;
            ctx.lineWidth = 2;
            ctx.stroke();

            return { ...star, x, y };
          })
          .filter(s => s.life < 60)
      );

      requestAnimationFrame(draw);
    };

    draw();
  }, [stars, darkMode]);

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    />
  );
};

export default Starfield;
