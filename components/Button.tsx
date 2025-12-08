import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  icon?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 transform";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-primary/40 focus:ring-primary hover:-translate-y-1",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary hover:shadow-lg hover:shadow-primary/20",
    white: "bg-white text-secondary hover:bg-gray-50 shadow-lg focus:ring-white hover:-translate-y-1",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};

export default Button;