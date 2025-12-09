import React from 'react';
import { TIMELINE_EVENTS } from './constants';
import { Heart, Star, Cake, Calendar, Gift, ArrowLeft } from 'lucide-react';
import { PageView } from './types';

interface TimelineProps {
  setPage: (page: PageView) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'ring': return <Gift className="w-5 h-5 text-white" />;
    case 'heart': return <Heart className="w-5 h-5 text-white fill-current" />;
    case 'kiss': return <Heart className="w-5 h-5 text-white" />;
    case 'cake': return <Cake className="w-5 h-5 text-white" />;
    case 'star': return <Star className="w-5 h-5 text-white" />;
    default: return <Calendar className="w-5 h-5 text-white" />;
  }
};

const Timeline: React.FC<TimelineProps> = ({ setPage }) => {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 relative z-10 pb-32">
      <button 
        onClick={() => setPage('home')}
        className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <header className="text-center mb-20 mt-8 animate-fade-in">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200 font-['Playfair_Display'] mb-4">
          Nossa Jornada
        </h2>
        <p className="text-lg text-pink-100/80 font-['Cormorant_Garamond'] italic text-2xl">
          Cada data, uma memória eterna.
        </p>
      </header>

      <div className="max-w-4xl mx-auto relative">
        {/* Glowing Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-50 shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>

        {TIMELINE_EVENTS.map((event, index) => (
          <div 
            key={index} 
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Icon Bubble */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full border-4 border-[#2e1065] shadow-[0_0_20px_rgba(236,72,153,0.6)] flex items-center justify-center z-10">
              {getIcon(event.icon)}
            </div>

            {/* Content Card */}
            <div className={`ml-16 md:ml-0 w-full md:w-[45%] ${
              index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
            }`}>
              <div className="glass-card p-8 rounded-2xl relative group">
                {/* Decorative border glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                
                <span className="inline-block px-4 py-1 bg-pink-500/20 border border-pink-500/30 text-pink-200 rounded-full text-sm font-bold mb-3 tracking-widest shadow-inner">
                  {event.date}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 font-['Playfair_Display']">
                  {event.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-['Montserrat']">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 opacity-50 font-['Dancing_Script'] text-2xl">
        E a história continua...
      </div>
    </div>
  );
};

export default Timeline;