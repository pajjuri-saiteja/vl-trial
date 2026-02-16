
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const onMouseDown = () => gsap.to(cursor, { scale: 0.8, duration: 0.2 });
    const onMouseUp = () => gsap.to(cursor, { scale: 1, duration: 0.2 });

    const onMouseEnterLink = () => gsap.to(cursor, { scale: 2.5, opacity: 0.3, duration: 0.3 });
    const onMouseLeaveLink = () => gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="hidden md:block cursor-custom"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
};
