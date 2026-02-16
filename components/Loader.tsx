
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.to(lineRef.current, { width: '200px', duration: 1.5, ease: 'power4.inOut' })
      .to(logoRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.5')
      .to(containerRef.current, { opacity: 0, duration: 0.8, delay: 0.5, ease: 'power2.inOut' });
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center"
    >
      <div 
        ref={logoRef}
        className="text-cream text-6xl font-serif opacity-0 translate-y-8 mb-4"
      >
        VL
      </div>
      <div 
        ref={lineRef}
        className="h-[1px] bg-soft-gold w-0"
      />
    </div>
  );
};
