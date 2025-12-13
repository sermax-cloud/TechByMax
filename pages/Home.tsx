import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Shield, Smartphone, Globe, Code2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { SERVICES, PROJECTS, STATS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none" />

        {/* Moving Blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-emerald-100 text-sm font-medium text-primary hover:scale-105 transition-transform cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                #1 Tech Agency in Ghana
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-secondary">
                We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Beautiful</span> Digital Legacies.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                TechByMax provides world-class web solutions, enterprise software, and AI automations for forward-thinking businesses in Ghana and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <NavLink to="/contact">
                  <Button icon>Start Your Project</Button>
                </NavLink>
                <NavLink to="/portfolio">
                  <Button variant="outline">View Portfolio</Button>
                </NavLink>
              </div>

              <div className="pt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden hover:-translate-y-1 transition-transform duration-300 z-0 hover:z-10 relative">
                      <img src={`https://picsum.photos/50/50?random=${i + 20}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p>Trusted by 100+ Ghanaian Businesses</p>
              </div>
            </div>

            <div className="relative hidden lg:block h-[600px] perspective-1000">
              {/* Abstract Device Mockup Composition */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse-slow blur-2xl" />
              <div className="absolute top-10 right-10 w-full h-full animate-float">
                <div className="relative rounded-2xl shadow-2xl border-4 border-white transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700 z-10 shadow-primary/20 overflow-hidden h-full">
                  <img
                    src="/hero-image.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-emerald-600/20 mix-blend-multiply"></div>
                </div>
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-white/50 animate-float animation-delay-2000">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-primary">
                      <Zap size={24} className="fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-lg">AI Optimization</p>
                      <p className="text-xs text-gray-500 font-medium">+245% Efficiency</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-emerald-400 h-full w-[85%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 cursor-default">
                <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-primary/50">
                  <stat.icon size={32} className="text-white transition-transform group-hover:rotate-12" />
                </div>
                <h3 className="text-4xl font-bold font-display mb-2 group-hover:text-primary transition-colors">{stat.value}</h3>
                <p className="text-gray-400 uppercase tracking-widest text-sm group-hover:text-white transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-6">
          <SectionHeader title="Our Expertise" subtitle="What We Do" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors transform group-hover:rotate-3">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-500">
                      <CheckCircle2 size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <NavLink to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </NavLink>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/services">
              <Button variant="outline" className="hover:scale-105 transition-transform">View All Services</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group perspective-1000">
              <img
                src="/team-meeting.jpg"
                alt="Team meeting"
                className="rounded-2xl shadow-2xl z-10 relative transform transition-transform duration-700 group-hover:rotate-y-12"
              />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary rounded-2xl z-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
            </div>

            <div>
              <SectionHeader title="Why Ghana's Top Brands Trust Us" subtitle="The TechByMax Advantage" alignment="left" />
              <div className="space-y-6">
                {[
                  { title: 'Local Expertise, Global Standards', desc: 'We understand the Ghanaian market nuances while delivering international quality code.', icon: Globe },
                  { title: 'Secure & Scalable Systems', desc: 'Enterprise-grade security protocols integrated into every application we build.', icon: Shield },
                  { title: 'Mobile-First Approach', desc: 'Optimized experiences for the 80% of users accessing the web via mobile devices in Africa.', icon: Smartphone },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 shrink-0 bg-white shadow-md rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-24 bg-secondary text-white relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse-slow"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Recent Masterpieces" subtitle="Our Portfolio" light />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {PROJECTS.slice(0, 2).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>

                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/portfolio">
              <Button variant="primary">Explore Full Portfolio</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <SectionHeader title="What Clients Say" subtitle="Testimonials" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="bg-gray-50 p-8 rounded-2xl relative border-t-4 border-transparent hover:border-primary transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <img src={test.image} alt={test.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-100" />
                  <div>
                    <h4 className="font-bold text-lg">{test.name}</h4>
                    <p className="text-sm text-gray-500">{test.role}, {test.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{test.content}"</p>
                <div className="absolute top-6 right-8 text-6xl text-gray-200 font-serif leading-none opacity-50">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Let's build a solution that sets you apart from the competition.
          </p>
          <NavLink to="/contact">
            <Button variant="white" icon className="hover:scale-105 transition-transform">Start a Conversation</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;