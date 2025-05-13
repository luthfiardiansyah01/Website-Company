import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  program: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    stats: string;
    color: string;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-500 h-full">
      {/* Card Border Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-white/10 p-px overflow-hidden">
        <div className="absolute inset-0 rounded-xl bg-[#0a0a1f]/60 backdrop-blur-md"></div>
      </div>
      
      {/* Card Content */}
      <div className="relative p-6 h-full flex flex-col">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {program.icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#00f0ff] transition-colors duration-300">
          {program.title}
        </h3>
        
        <p className="text-white/70 mb-5 flex-grow">
          {program.description}
        </p>
        
        <div className="mt-auto">
          <div className="text-white/60 text-sm mb-4">
            {program.stats}
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#00f0ff]/80 transition-colors group/link"
          >
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
        
        {/* Hover Effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-md"></div>
      </div>
    </div>
  );
};

export default ProgramCard;