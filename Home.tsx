import React from 'react';
import { PageView } from './types';
import { HeartHandshake, Calendar, MessageCircle, Sparkles } from 'lucide-react';

interface HomeProps {
  setPage: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
      
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 animate-float">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-sm font-medium tracking-wider text-pink-100">EDIÇÃO ESPECIAL DE ANIVERSÁRIO</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-pink-100 to-pink-300 font-['Playfair_Display'] mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
          Hailine
        </h1>
        
        <p className="text-2xl md:text-3xl text-pink-100 font-['Dancing_Script'] mb-8">
          Minha Vida, Meu Amor, Minha História.
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto rounded-full opacity-70"></div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        
        <button
          onClick={() => setPage('timeline')}
          className="glass-card group p-8 rounded-3xl text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Calendar className="w-24 h-24" />
          </div>
          <div className="bg-purple-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-purple-400/30 group-hover:scale-110 transition-transform">
            <Calendar className="w-6 h-6 text-purple-200" />
          </div>
          <h3 className="text-2xl font-bold mb-2 font-['Playfair_Display']">Nossa História</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Cada data importante, cada passo que demos juntos até aqui.
          </p>
          <div className="mt-4 flex items-center text-purple-300 text-sm font-medium">
            Ver Linha do Tempo &rarr;
          </div>
        </button>

        <button
          onClick={() => setPage('reasons')}
          className="glass-card group p-8 rounded-3xl text-left relative overflow-hidden ring-2 ring-pink-500/30"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <HeartHandshake className="w-24 h-24" />
          </div>
          <div className="bg-pink-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-pink-400/30 group-hover:scale-110 transition-transform">
            <HeartHandshake className="w-6 h-6 text-pink-200" />
          </div>
          <h3 className="text-2xl font-bold mb-2 font-['Playfair_Display']">Por Que Te Amo</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Os detalhes, os motivos e as pequenas coisas que me encantam.
          </p>
          <div className="mt-4 flex items-center text-pink-300 text-sm font-medium">
            Ler Motivos &rarr;
          </div>
        </button>

        <button
          onClick={() => setPage('messages')}
          className="glass-card group p-8 rounded-3xl text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <MessageCircle className="w-24 h-24" />
          </div>
          <div className="bg-red-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-red-400/30 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-red-200" />
          </div>
          <h3 className="text-2xl font-bold mb-2 font-['Playfair_Display']">Cartas de Amor</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Palavras que vêm direto do meu coração para o seu.
          </p>
          <div className="mt-4 flex items-center text-red-300 text-sm font-medium">
            Ler Declarações &rarr;
          </div>
        </button>

      </div>
    </div>
  );
};

export default Home;