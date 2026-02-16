
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Check } from 'lucide-react';
import { PROJECTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    gsap.from('.detail-content > *', {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((img) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: -100,
        ease: 'none'
      });
    });
  }, [slug]);

  if (!project) return <div className="h-screen flex items-center justify-center">Project not found</div>;

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="h-[80vh] relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-cream text-5xl md:text-8xl font-serif text-center px-6 reveal">{project.title}</h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <Link to="/projects" className="inline-flex items-center gap-2 text-soft-gold uppercase tracking-widest text-xs font-bold mb-12 hover:gap-4 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 detail-content">
          <div className="lg:col-span-2">
            <h4 className="text-soft-gold uppercase tracking-widest text-xs font-bold mb-4">Project Overview</h4>
            <p className="text-3xl md:text-4xl font-serif text-charcoal mb-10 leading-tight">{project.description}</p>
            
            <h4 className="text-soft-gold uppercase tracking-widest text-xs font-bold mb-4">The Approach</h4>
            <p className="text-stone-gray text-lg leading-relaxed mb-10">{project.approach}</p>
          </div>

          <div className="bg-white p-10 border border-warm-beige/30">
            <h4 className="text-charcoal uppercase tracking-widest text-sm font-bold mb-8">Materials Palette</h4>
            <ul className="space-y-4">
              {project.materials.map((m, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-gray">
                  <div className="w-4 h-4 border border-soft-gold flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-soft-gold" />
                  </div>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-32 space-y-24">
          {project.gallery.map((img, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:items-end' : ''}`}>
              <div className="w-full md:w-2/3 aspect-[16/9] overflow-hidden relative">
                <img 
                  src={img} 
                  alt={`${project.title} detail ${i}`} 
                  className="parallax-img w-full h-[120%] object-cover absolute top-0 left-0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial if exists */}
        {project.testimonial && (
            <div className="mt-32 py-24 border-y border-warm-beige text-center">
                <p className="text-4xl font-serif italic text-charcoal mb-8 max-w-4xl mx-auto">"{project.testimonial.quote}"</p>
                <p className="uppercase tracking-[0.2em] font-bold text-sm">— {project.testimonial.author}</p>
            </div>
        )}

        {/* Next Project Link */}
        <div className="mt-32 text-center">
            <Link 
                to={`/projects/${PROJECTS[0].slug}`} 
                className="text-6xl md:text-8xl font-serif text-charcoal opacity-10 hover:opacity-100 transition-opacity duration-700 block py-12"
            >
                Next Project
            </Link>
        </div>
      </div>
    </div>
  );
};
