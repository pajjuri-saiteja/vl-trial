
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. Our studio will contact you shortly.");
  };

  return (
    <div className="pt-32 pb-0 bg-cream">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-6">Let's Connect</h1>
          <p className="text-stone-gray">Begin your journey toward a more refined lifestyle.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-warm-beige/30 border border-warm-beige/30">
          {/* Form */}
          <div className="bg-white p-10 md:p-16">
            <h3 className="text-3xl font-serif text-charcoal mb-10">Project Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-gray">Name</label>
                  <input type="text" className="bg-transparent border-b border-warm-beige focus:border-soft-gold outline-none py-2 transition-colors" placeholder="Full Name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-gray">Email</label>
                  <input type="email" className="bg-transparent border-b border-warm-beige focus:border-soft-gold outline-none py-2 transition-colors" placeholder="email@address.com" required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-gray">Project Type</label>
                <select className="bg-transparent border-b border-warm-beige focus:border-soft-gold outline-none py-2 transition-colors">
                  <option>Residential Interior</option>
                  <option>Apartment Styling</option>
                  <option>Commercial Space</option>
                  <option>Turnkey Project</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-gray">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-warm-beige focus:border-soft-gold outline-none py-2 transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
              </div>
              <button className="w-full py-5 bg-charcoal text-cream uppercase tracking-widest text-xs font-bold hover:bg-soft-gold transition-all duration-500">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Studio Info */}
          <div className="bg-charcoal p-10 md:p-16 text-cream">
            <h3 className="text-3xl font-serif mb-12">The Studio</h3>
            <div className="space-y-12">
              <div className="flex gap-6">
                <MapPin className="text-soft-gold w-6 h-6 shrink-0" />
                <div>
                  <h5 className="font-bold tracking-widest uppercase text-xs mb-2">Location</h5>
                  <p className="text-warm-beige opacity-70">128 Belgravia Square, <br /> London, SW1X 8AX</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Mail className="text-soft-gold w-6 h-6 shrink-0" />
                <div>
                  <h5 className="font-bold tracking-widest uppercase text-xs mb-2">Email</h5>
                  <p className="text-warm-beige opacity-70">studio@vlinteriors.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Phone className="text-soft-gold w-6 h-6 shrink-0" />
                <div>
                  <h5 className="font-bold tracking-widest uppercase text-xs mb-2">Phone</h5>
                  <p className="text-warm-beige opacity-70">+44 (0) 20 7946 0124</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-cream/10">
                <h5 className="font-bold tracking-widest uppercase text-xs mb-6">Follow Us</h5>
                <div className="flex gap-8 text-warm-beige text-xs uppercase tracking-widest">
                    <a href="#" className="hover:text-soft-gold transition-colors">Instagram</a>
                    <a href="#" className="hover:text-soft-gold transition-colors">Pinterest</a>
                    <a href="#" className="hover:text-soft-gold transition-colors">LinkedIn</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
