
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream py-24 border-t border-warm-beige/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl font-serif tracking-[0.2em] mb-8 block">VL INTERIORS</Link>
          <p className="text-stone-gray max-w-sm mb-8">
            Specializing in high-end residential interior design and architecture. We create spaces that celebrate the art of living.
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-soft-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-soft-gold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-soft-gold transition-colors">Pinterest</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold tracking-widest uppercase text-xs mb-8">Navigation</h4>
          <ul className="space-y-4 text-stone-gray text-sm">
            <li><Link to="/" className="hover:text-soft-gold transition-colors">Home</Link></li>
            <li><Link to="/projects" className="hover:text-soft-gold transition-colors">Projects</Link></li>
            <li><Link to="/about" className="hover:text-soft-gold transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-soft-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold tracking-widest uppercase text-xs mb-8">Newsletter</h4>
          <p className="text-stone-gray text-sm mb-6">Receive curated design inspiration and studio updates.</p>
          <div className="flex">
            <input type="email" placeholder="Email Address" className="bg-transparent border-b border-stone-gray text-xs py-2 w-full focus:border-soft-gold outline-none" />
            <button className="text-[10px] uppercase font-bold tracking-widest ml-4 hover:text-soft-gold">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 mt-24 border-t border-warm-beige/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-stone-gray opacity-50">
        <p>© {new Date().getFullYear()} VL Interiors — Luxury Living. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
