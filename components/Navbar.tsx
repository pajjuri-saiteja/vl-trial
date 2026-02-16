
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif tracking-[0.2em] transition-colors ${
          isScrolled ? 'text-charcoal' : 'text-cream'
        }`}>
          VL INTERIORS
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium transition-colors ${
          isScrolled ? 'text-charcoal' : 'text-cream'
        }`}>
          <Link to="/" className="hover:text-soft-gold transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-soft-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/projects" className="hover:text-soft-gold transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-soft-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-soft-gold transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-soft-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="hover:text-soft-gold transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-soft-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-charcoal' : 'text-cream'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-charcoal z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-700 ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <button 
          className="absolute top-8 right-8 text-cream"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center gap-8 text-cream text-3xl font-serif">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};
