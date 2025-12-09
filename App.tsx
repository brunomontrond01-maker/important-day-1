import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Timeline from './Timeline';
import Reasons from './Reasons';
import Messages from './Messages';
import HeartRain from './HeartRain';
import { PageView } from './types';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [page, setPage] = useState<PageView>('home');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setPage('home');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen overflow-hidden">
        <HeartRain />
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <HeartRain />
      
      <main className="transition-opacity duration-500 ease-in-out">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'timeline' && <Timeline setPage={setPage} />}
        {page === 'reasons' && <Reasons setPage={setPage} />}
        {page === 'messages' && <Messages setPage={setPage} />}
      </main>
      
      <footer className="fixed bottom-0 w-full py-4 text-center text-white/30 text-xs z-0 font-['Montserrat'] pointer-events-none">
        Feito com amor eterno para Hailine ❤️
      </footer>
    </div>
  );
}