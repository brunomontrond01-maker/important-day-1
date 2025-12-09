import React, { useState } from 'react';
import { ALBUMS } from './constants';
import { ArrowLeft } from 'lucide-react';
import { PageView, Album } from './types';

interface GalleryProps {
  setPage: (page: PageView) => void;
}

const Gallery: React.FC<GalleryProps> = ({ setPage }) => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  if (selectedAlbum) {
    return (
      <div className="min-h-screen p-6 relative z-10 pb-20">
         <button 
          onClick={() => setSelectedAlbum(null)}
          className="fixed top-6 left-6 z-50 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-pink-600" />
        </button>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 font-['Playfair_Display'] mb-8 mt-16 md:mt-4">
          {selectedAlbum.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {selectedAlbum.photos.map((photo, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-gray-700 font-['Dancing_Script'] text-2xl">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 relative z-10 pb-20">
      <button 
        onClick={() => setPage('home')}
        className="fixed top-6 left-6 z-50 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-pink-600" />
      </button>

      <h2 className="text-4xl font-bold text-center text-pink-700 font-['Playfair_Display'] mb-4 mt-8">
        Nossas Memórias
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Colecionei aqui alguns dos nossos momentos mais lindos. Clique em um álbum para ver mais.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {ALBUMS.map((album) => (
          <div 
            key={album.id}
            onClick={() => setSelectedAlbum(album)}
            className="group cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-[1.02]"
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
              <img 
                src={album.coverUrl} 
                alt={album.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 text-center border-t-4 border-pink-400">
              <h3 className="text-2xl font-bold text-gray-800 font-['Playfair_Display'] mb-2">
                {album.title}
              </h3>
              <p className="text-pink-500 font-medium">
                {album.photos.length} {album.photos.length === 1 ? 'Foto' : 'Fotos'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;