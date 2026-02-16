
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-widest text-soft-gold font-bold text-xs mb-4">Philosophy</p>
            <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8 leading-tight">Curating <br /> Emotional Spaces</h1>
            <p className="text-stone-gray text-lg leading-relaxed mb-6">
                Founded by Victoria Laurent, VL Interiors began with a singular vision: to redefine luxury not through excess, but through the precise balance of material, light, and form.
            </p>
            <p className="text-stone-gray text-lg leading-relaxed mb-10">
                We believe that the home is the ultimate expression of the self. Our studio works closely with each client to uncover their unique aesthetic language and translate it into a physical sanctuary that feels both timeless and deeply personal.
            </p>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <h4 className="text-charcoal font-serif text-4xl mb-2">12+</h4>
                    <p className="text-xs uppercase tracking-widest text-stone-gray">Years Experience</p>
                </div>
                <div>
                    <h4 className="text-charcoal font-serif text-4xl mb-2">150+</h4>
                    <p className="text-xs uppercase tracking-widest text-stone-gray">Projects Delivered</p>
                </div>
            </div>
          </div>
          <div className="relative">
            <img 
                src="https://images.unsplash.com/photo-1556912177-c5403560170b?auto=format&fit=crop&q=80&w=1200" 
                alt="Victoria Laurent" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-10 -right-10 bg-soft-gold p-10 hidden md:block">
                <p className="text-white font-serif text-xl italic">"Design is a silent language spoken by the walls of our lives."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
