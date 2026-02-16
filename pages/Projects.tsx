
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  useEffect(() => {
    gsap.from('.project-item', {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="uppercase tracking-[0.3em] text-[10px] text-soft-gold font-bold mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-6">Our Legacy</h1>
          <p className="text-stone-gray max-w-2xl mx-auto">Explore our portfolio of bespoke residential transformations and luxury interior concepts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS.map((p) => (
            <Link 
              key={p.id} 
              to={`/projects/${p.slug}`}
              className="project-item group block"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-soft-gold font-bold mb-1">{p.category}</p>
                  <h3 className="text-2xl font-serif text-charcoal">{p.title}</h3>
                </div>
                <div className="w-8 h-[1px] bg-soft-gold mt-4 group-hover:w-16 transition-all"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
