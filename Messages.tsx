import React from 'react';
import { ArrowLeft, Quote } from 'lucide-react';
import { PageView } from './types';
import { LOVE_MESSAGES } from './constants';

interface MessagesProps {
  setPage: (page: PageView) => void;
}

const Messages: React.FC<MessagesProps> = ({ setPage }) => {
  return (
    <div className="min-h-screen py-12 px-4 relative z-10 pb-20">
      <button 
        onClick={() => setPage('home')}
        className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <header className="text-center mb-16 mt-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-['Playfair_Display'] mb-4">
          Declarações de Amor
        </h2>
        <p className="text-pink-200 font-['Dancing_Script'] text-3xl">
          Palavras que o coração dita...
        </p>
      </header>

      <div className="max-w-5xl mx-auto columns-1 md:columns-2 gap-8 space-y-8">
        {LOVE_MESSAGES.map((msg, idx) => (
          <div key={idx} className="glass-panel p-8 md:p-10 rounded-xl break-inside-avoid hover:bg-white/10 transition-colors relative">
            <Quote className="w-10 h-10 text-pink-400/30 mb-4 mx-auto" />
            
            <p className="text-xl md:text-2xl text-gray-100 font-['Cormorant_Garamond'] leading-relaxed text-center italic mb-6">
              "{msg.text}"
            </p>
            
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-pink-500/50"></div>
              <span className="text-sm font-bold text-pink-400 uppercase tracking-widest font-['Montserrat']">
                {msg.author}
              </span>
              <div className="h-px w-8 bg-pink-500/50"></div>
            </div>
          </div>
        ))}
        
        {/* Card Final Especial */}
        <div className="glass-card p-10 rounded-xl break-inside-avoid bg-gradient-to-br from-pink-600/30 to-purple-600/30 border-pink-500/30 text-center">
            <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-2">Eu Te Amo</h3>
            <p className="text-lg">Hoje e sempre, Hailine.</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;