import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validName = name.trim().toLowerCase().includes('hailine');
    const validDate = date === '2010-12-13';

    if (validName && validDate) {
      onLogin();
    } else {
      setError('Apenas o amor da minha vida tem a chave... ❤️');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative z-20 px-4">
      <div className={`glass-panel p-8 md:p-12 rounded-3xl max-w-md w-full relative overflow-hidden transition-transform ${shake ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-red-500 to-purple-500"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-md shadow-inner border border-white/30 animate-pulse">
            <Heart className="w-10 h-10 text-pink-300 fill-current" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2 font-['Playfair_Display']">
          Bem-vinda, Amor
        </h2>
        <p className="text-center text-pink-200 mb-8 font-['Montserrat'] text-sm">
          Uma surpresa especial espera por você.
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="group">
            <label className="block text-pink-100 mb-2 text-sm font-medium tracking-wide">COMO EU TE CHAMO?</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/20 text-white p-4 rounded-xl border border-white/10 focus:border-pink-400 focus:bg-black/30 focus:outline-none transition-all placeholder-white/30 text-center"
              placeholder="(Dica: Hailine)"
            />
          </div>
          
          <div className="group">
            <label className="block text-pink-100 mb-2 text-sm font-medium tracking-wide">DATA DO SEU NASCIMENTO</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-black/20 text-white p-4 rounded-xl border border-white/10 focus:border-pink-400 focus:bg-black/30 focus:outline-none transition-all text-center scheme-dark"
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 p-3 rounded-lg">
              <p className="text-red-200 text-center text-sm font-medium flex items-center justify-center gap-2">
                 {error}
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-xl border border-white/20 mt-4 uppercase tracking-widest text-sm"
          >
            Entrar no Nosso Mundo
          </button>
        </form>
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .scheme-dark {
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
};

export default Login;