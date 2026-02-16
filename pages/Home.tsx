
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star } from 'lucide-react';
import { PROJECTS, SERVICES, TESTIMONIALS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animations
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out',
      });

      gsap.to('.hero-bg', {
        scale: 1.1,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'linear',
      });

      // Reveal Animations on scroll
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 1,
          ease: 'power2.out',
        });
      });

      // Timeline line animation
      gsap.from('.timeline-line', {
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 70%',
          end: 'bottom 20%',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top center',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Interior" 
            className="hero-bg w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-cream px-6 max-w-4xl hero-content">
          <p className="uppercase tracking-[0.4em] text-xs mb-6 opacity-80">VL Interiors — Luxury Living</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
            Designing Timeless Spaces <br /> That Feel Like Home
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Luxury interior design crafted with precision and elevated living aesthetics for the sophisticated resident.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/projects" 
              className="px-10 py-5 bg-cream text-charcoal uppercase tracking-widest text-xs font-bold relative overflow-hidden group hover:text-soft-gold transition-colors duration-500 gold-beam"
            >
              View Projects
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-5 border border-cream/30 text-cream uppercase tracking-widest text-xs font-bold backdrop-blur-sm hover:bg-cream hover:text-charcoal transition-all duration-500"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-16 bg-cream/30 mx-auto"></div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutRef} className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h4 className="text-soft-gold uppercase tracking-widest text-xs font-bold mb-4">Our Story</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
              Sophistication <br /> In Every Detail
            </h2>
            <p className="text-stone-gray text-lg leading-relaxed mb-8">
              VL Interiors — Luxury Living is a premium interior design studio specializing in sophisticated residential transformations. We merge timeless design principles with modern functionality to craft emotionally engaging spaces.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 text-charcoal font-bold tracking-widest uppercase text-xs group">
              Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="reveal relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                alt="Studio Detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-warm-beige/30 -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Our Expertise</h2>
            <div className="w-20 h-[1px] bg-soft-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <div key={i} className="reveal group p-8 bg-cream hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-warm-beige">
                <div className="w-12 h-12 mb-8 text-soft-gold">
                  <Star className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-4">{s.title}</h3>
                <p className="text-stone-gray leading-relaxed mb-6">{s.description}</p>
                <div className="w-0 h-[1px] bg-soft-gold group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects (Simplified Masonry) */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 reveal">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif text-charcoal">Selected Works</h2>
            </div>
            <Link to="/projects" className="text-xs font-bold uppercase tracking-widest text-charcoal hover:text-soft-gold transition-colors pb-1 border-b border-soft-gold">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 4).map((p, i) => (
              <Link 
                key={p.id} 
                to={`/projects/${p.slug}`}
                className={`reveal group relative overflow-hidden block ${i % 3 === 0 ? 'md:col-span-1' : 'md:col-span-1'}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-cream/80 text-[10px] uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{p.category}</p>
                  <h3 className="text-cream text-3xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section ref={timelineRef} className="py-24 md:py-32 bg-charcoal text-cream relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Our Process</h2>
            <p className="text-warm-beige opacity-70">Methodical approach to exceptional design.</p>
          </div>

          <div className="relative timeline-container max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-stone-gray opacity-20"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-soft-gold timeline-line"></div>

            <div className="space-y-24">
              {[
                { n: '01', t: 'Consultation', d: 'An initial meeting to discuss your vision, requirements, and lifestyle needs.' },
                { n: '02', t: 'Concept Development', d: 'Crafting the mood boards, initial sketches, and color palettes.' },
                { n: '03', t: '3D Visualization', d: 'Photorealistic renderings to help you visualize your future space.' },
                { n: '04', t: 'Execution', d: 'Careful procurement and coordination with top-tier craftsmen.' },
                { n: '05', t: 'Final Reveal', d: 'The transformation is complete, and your new space is ready for living.' }
              ].map((step, i) => (
                <div key={i} className={`flex items-center gap-12 reveal ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2"></div>
                  <div className="relative z-10 w-4 h-4 bg-soft-gold rounded-full shadow-[0_0_15px_rgba(198,167,94,0.5)]"></div>
                  <div className={`w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-soft-gold font-bold tracking-widest mb-2 block">{step.n}</span>
                    <h4 className="text-2xl font-serif mb-4">{step.t}</h4>
                    <p className="text-warm-beige text-sm leading-relaxed opacity-70">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="inline-block min-w-[350px] md:min-w-[450px] p-10 bg-white shadow-sm border border-warm-beige/30 whitespace-normal">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-soft-gold text-soft-gold" />)}
                </div>
                <p className="text-charcoal italic mb-8 leading-relaxed">"{t.content}"</p>
                <div>
                  <h5 className="font-bold text-sm tracking-widest uppercase">{t.author}</h5>
                  <p className="text-stone-gray text-xs uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Grid (Mockup) */}
      <section className="py-12 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="aspect-square overflow-hidden group relative">
              <img src={`https://picsum.photos/seed/${i+50}/600/600`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Instagram" />
              <div className="absolute inset-0 bg-soft-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-charcoal text-cream text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none flex items-center justify-center">
            <h1 className="text-[20vw] font-serif uppercase select-none">VL INTERIORS</h1>
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 reveal">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to Elevate <br /> Your Living Space?</h2>
          <p className="text-warm-beige mb-12 opacity-80">Let's collaborate to create something truly exceptional.</p>
          <Link 
            to="/contact" 
            className="inline-block px-12 py-5 bg-soft-gold text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-charcoal transition-all duration-500"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};
