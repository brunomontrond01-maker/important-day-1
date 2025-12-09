export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: 'heart' | 'ring' | 'kiss' | 'cake' | 'star';
}

export interface Reason {
  title: string;
  description: string;
  detail: string; // Adicionado para mais profundidade
  icon: string;
}

export interface Photo {
  url: string;
  caption: string;
}

export interface Album {
  id: number;
  title: string;
  coverUrl: string;
  photos: Photo[];
}

export type PageView = 'home' | 'timeline' | 'reasons' | 'messages' | 'gallery';