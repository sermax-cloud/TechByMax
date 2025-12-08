import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="TechByMax Logo" className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform" />
          <span className={`font-display font-bold text-2xl tracking-tight ${scrolled ? 'text-secondary' : 'text-secondary'}`}>
            TechBy<span className="text-primary">Max</span>
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary relative group ${isActive ? 'text-primary' : 'text-gray-600'
                }`
              }
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
          <a
            href="https://wa.me/233550000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary transition-colors"
          >
            <Phone size={16} />
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/233550000000"
              className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;