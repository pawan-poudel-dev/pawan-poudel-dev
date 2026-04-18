import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useSpring(0, { damping: 20, stiffness: 250 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 250 });

  const ringX = useSpring(0, { damping: 15, stiffness: 150 });
  const ringY = useSpring(0, { damping: 15, stiffness: 150 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY, ringX, ringY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isHovering ? 0 : 1,
        }}
      />
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          backgroundColor: isHovering ? 'rgba(168, 224, 99, 0.1)' : 'transparent',
          borderColor: isHovering ? 'var(--accent)' : 'var(--accent)',
        }}
      />
    </>
  );
}
