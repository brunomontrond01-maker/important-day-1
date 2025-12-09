import { Album, Reason, TimelineEvent } from './types';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: '13/07/2024',
    title: 'O Momento da Coragem',
    description: 'O dia em que meu coração acelerou como nunca antes. Respirei fundo e decidi que não queria passar mais nenhum minuto sem você como minha namorada.',
    icon: 'ring',
  },
  {
    date: '14/07/2024',
    title: 'O Sim que Mudou Tudo',
    description: 'Quando você aceitou, o mundo ganhou novas cores. Nossa data oficial, o início do nosso "para sempre". A melhor decisão da minha vida.',
    icon: 'heart',
  },
  {
    date: '23/07/2024',
    title: 'A Magia do Primeiro Beijo',
    description: 'Um instante eterno. Onde o tempo parou e eu tive a certeza absoluta de que meus lábios pertenciam aos seus.',
    icon: 'kiss',
  },
  {
    date: '13/12/2010',
    title: 'O Mundo Ganha Você',
    description: 'O dia mais radiante do calendário. O nascimento da mulher que se tornaria a dona dos meus sorrisos. Feliz Aniversário, minha Vida!',
    icon: 'cake',
  },
  {
    date: '07/01',
    title: 'Meu Dia, Com Você',
    description: 'Antes era apenas meu aniversário. Agora, é mais um dia para celebrar a sorte que tenho de dividir a vida com você.',
    icon: 'star',
  },
];

export const REASONS_LIST: Reason[] = [
  {
    title: "Seu Sorriso Radiante",
    description: "A curva mais bonita do seu rosto.",
    detail: "Quando você sorri, não é apenas um movimento dos lábios; é como se o sol nascesse dentro de casa. Seu sorriso tem o poder de curar qualquer dia ruim e iluminar minha alma instantaneamente.",
    icon: "✨"
  },
  {
    title: "Sua Doçura Infinita",
    description: "A leveza que você traz para minha vida.",
    detail: "Seu jeito meigo, seus apelidos carinhosos e a forma como você cuida de mim me fazem sentir o homem mais amado do universo. Sua fofura é meu ponto fraco e minha maior alegria.",
    icon: "🥰"
  },
  {
    title: "Nossa Conexão de Almas",
    description: "Entendemos um ao outro sem palavras.",
    detail: "É raro e precioso o que temos. Um olhar basta para sabermos o que o outro pensa. Somos cúmplices, parceiros e melhores amigos, entrelaçados por um laço invisível e inquebrável.",
    icon: "🔗"
  },
  {
    title: "Sua Força Interior",
    description: "Admiro a mulher que você é e se torna.",
    detail: "Apesar de toda a delicadeza, você carrega uma força incrível. Ver você crescer, sonhar e conquistar seu espaço me enche de orgulho. Sou seu fã número um, hoje e sempre.",
    icon: "🛡️"
  },
  {
    title: "O Brilho dos Seus Olhos",
    description: "Onde encontro minha paz.",
    detail: "Seus olhos têm uma luz única, profunda e hipnotizante. Quando olho para você, vejo meu futuro, vejo amor e vejo a verdade mais bonita que já conheci.",
    icon: "👁️"
  },
  {
    title: "Simplesmente Hailine",
    description: "Eu amo cada detalhe seu.",
    detail: "Não amo apenas suas qualidades, amo seus defeitos, suas manias, seu jeito de dormir, de falar, de ser. Eu amo você por inteiro, exatamente como você é.",
    icon: "❤️"
  }
];

export const LOVE_MESSAGES = [
  {
    text: "Você ilumina meus dias só por existir. O mundo seria um lugar cinza sem a cor vibrante da sua presença na minha vida.",
    author: "Seu Eterno Namorado"
  },
  {
    text: "Obrigado por ser meu amor, minha alegria e minha melhor escolha. Em você, encontrei tudo o que nem sabia que procurava.",
    author: "Para Hailine"
  },
  {
    text: "Cada momento contigo é um tesouro que guardo no cofre do meu coração. Que venham anos e anos de memórias ao seu lado.",
    author: "Com Amor"
  },
  {
    text: "Feliz aniversário, meu amor! Que este novo ciclo seja tão incrível quanto você. Prometo fazer de tudo para ver esse sorriso lindo todos os dias.",
    author: "Sua Vida"
  }
];

export const ALBUMS: Album[] = [
  {
    id: 1,
    title: 'Nossos Sorrisos',
    coverUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1000',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1000',
        caption: 'Aquele dia especial'
      },
      {
        url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000',
        caption: 'Nós dois'
      }
    ]
  },
  {
    id: 2,
    title: 'Momentos Especiais',
    coverUrl: 'https://images.unsplash.com/photo-1520483602335-a4a6c54d9133?auto=format&fit=crop&q=80&w=1000',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000',
        caption: 'Aventuras'
      }
    ]
  }
];