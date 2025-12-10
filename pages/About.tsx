import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Target, Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 transform origin-top-right backdrop-blur-3xl" />
        <div className="absolute -bottom-10 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up">Innovating for Ghana.</h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fade-in-up [animation-delay:200ms]">
            We are a team of passionate engineers, designers, and strategists dedicated to elevating the digital landscape of West Africa.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-primary font-bold tracking-wider uppercase mb-2">Who We Are</h3>
              <h2 className="text-4xl font-display font-bold text-secondary mb-6">More Than Just a Tech Company</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in Accra, TechByMax emerged from a simple desire: to bridge the gap between world-class technology standards and the local Ghanaian market needs.
                </p>
                <p>
                  We don't just write code; we engineer growth. Whether it's a small SME looking to go online or a government institution needing a complex database system, we approach every project with the same level of precision and excellence.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Mission', desc: 'To empower African businesses with cutting-edge digital tools.', icon: Target },
                { title: 'Vision', desc: 'To be the continent\'s most trusted technology partner.', icon: Users },
                { title: 'Values', desc: 'Integrity, Excellence, and Innovation in everything we do.', icon: Heart },
                { title: 'Quality', desc: 'Global standards tailored for local relevance.', icon: Award },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-emerald-100 hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto bg-emerald-100 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Meet The Minds" subtitle="Our Team" />
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: 'Maxwell Dela', role: 'Founder & Lead Engineer', img: '/team-maxwell.jpg' },
              { name: 'Prince Asare', role: 'Head of Design', img: '/prince-asare.jpg' },
              { name: 'Esch Barnor', role: 'Project Manager', img: '/esch-barnor.jpg' },
            ].map((member, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full max-w-[320px]">
                <div className="relative overflow-hidden aspect-square">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{member.name}</h4>
                  <p className="text-primary font-medium text-sm text-gray-500 group-hover:text-primary/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;