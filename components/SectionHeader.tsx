import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = false
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h3 className={`text-lg font-bold uppercase tracking-wider mb-3 ${light ? 'text-primary' : 'text-primary'}`}>
        {subtitle}
      </h3>
      <h2 className={`text-4xl md:text-5xl font-display font-bold leading-tight ${light ? 'text-white' : 'text-secondary'}`}>
        {title}
      </h2>
      <div className={`mt-6 h-1.5 w-24 bg-primary rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeader;