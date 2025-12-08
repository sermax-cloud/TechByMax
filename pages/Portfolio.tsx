import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Web', 'SaaS', 'AI', 'Enterprise'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(filter) || p.tags.some(t => t.includes(filter)));

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-white py-24 text-center border-b border-gray-100">
        <div className="container mx-auto px-6">
          <SectionHeader title="Our Work Speaks" subtitle="Portfolio" />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === f 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-secondary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                    View Case Study <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                     <span className="text-primary text-xs font-bold uppercase tracking-wider">{project.category}</span>
                     <h3 className="text-2xl font-bold text-secondary mt-1">{project.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;