import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  const categories = ['Web', 'Enterprise', 'AI'];

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-secondary text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-display font-bold mb-6 animate-fade-in-up">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            Comprehensive technology solutions tailored to drive efficiency and growth for your organization.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-6 py-24 space-y-32">
        {categories.map((cat, catIdx) => (
          <div key={cat} className="scroll-mt-28" id={cat.toLowerCase()}>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-display font-bold text-secondary">{cat} Solutions</h2>
              <div className="h-0.5 flex-grow bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {SERVICES.filter(s => s.category === cat).map((service, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row gap-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-emerald-50 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 transform group-hover:rotate-6">
                      <service.icon size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs group-hover:bg-primary group-hover:text-white transition-colors">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className="text-sm font-medium text-gray-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <NavLink to="/contact">
                      <Button variant="outline" className="text-sm py-2 px-6">Request Quote</Button>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Strip */}
      <section className="bg-gray-50 py-16 border-y border-gray-200 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 font-bold uppercase tracking-widest mb-8">Powering Solutions With</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['React', 'Node.js', 'Python', 'AWS', 'TensorFlow', 'PostgreSQL', 'Figma'].map((tech, i) => (
              <span key={tech} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default" style={{transitionDelay: `${i * 50}ms`}}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;