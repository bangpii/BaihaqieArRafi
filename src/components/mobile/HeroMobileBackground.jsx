import { useMemo } from "react";

const HeroMobileBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      left: `${(i * 47) % 100}%`,
      bottom: `${(i * 31) % 100}%`,
      duration: `${5 + (i % 5)}s`,
      delay: `${(i * 0.7) % 6}s`,
      size: 2 + (i % 3),
      opacity: 0.2 + (i % 3) * 0.15,
    }));
  }, []);

  return (
    <div className='hero-mobile-bg'>
      <div className='hero-particles'>
        {particles.map((p, i) => (
          <span
            key={i}
            className='hero-particle'
            style={{
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
      <div className='orb orb-1' />
      <div className='orb orb-2' />
      <div className='orb orb-3' />
    </div>
  );
};

export default HeroMobileBackground;
