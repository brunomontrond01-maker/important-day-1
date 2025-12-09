import React from 'react';
import { REASONS_LIST } from './constants';
import { ArrowLeft, Heart } from 'lucide-react';
import { PageView } from './types';

interface ReasonsProps {
  setPage: (page: PageView) => void;
}

const Reasons: React.FC<ReasonsProps> = ({ setPage }) => {
  return (
    <div className="min-h-screen py-12 px-4 relative z-10 pb-24">
      <button 
        onClick={() => setPage('home')}
        className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="text-center max-w-3xl mx-auto mb-16 mt-8">
        <div className="flex justify-center mb-4">
          <Heart className="w-8 h-8 text-pink-400 animate-pulse fill-current" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-['Playfair_Display'] mb-6">
          Por Que Eu Te Amo
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-['Cormorant_Garamond'] leading-relaxed italic">
          Eu poderia escrever um livro, mas aqui estão algumas das páginas mais bonitas sobre você.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REASONS_LIST.map((reason, idx) => (
          <div 
            key={idx} 
            className="glass-card p-8 rounded-2xl flex flex-col items-start group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/0 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

            <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 drop-shadow-lg">
              {reason.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white font-['Playfair_Display'] mb-3 relative z-10">
              {reason.title}
            </h3>
            
            <p className="text-pink-200 font-medium mb-4 font-['Montserrat'] text-sm uppercase tracking-wide opacity-80">
              {reason.description}
            </p>
            
            <div className="w-full h-px bg-white/10 mb-4"></div>
            
            <p className="text-gray-300 leading-relaxed font-['Cormorant_Garamond'] text-lg italic">
              "{reason.detail}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;