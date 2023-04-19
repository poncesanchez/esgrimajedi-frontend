import jedi from '../assets/facciones/jedi.svg';
import jediHover from '../assets/facciones/jedi-hover.svg';
import sith from '../assets/facciones/sith.svg';
import sithHover from '../assets/facciones/sith-hover.svg';
import neutral from '../assets/facciones/neutral.svg';
import neutralHover from '../assets/facciones/neutral-hover.svg';
import caballero from '../assets/rangos/knight.svg';
import padawan from '../assets/rangos/padawan.svg';
import maestro from '../assets/rangos/master.svg';

interface FactionImages {
  [key: string]: {
    NORMAL: string;
    HOVER: string;
  };
}

interface SOCIAL {
  INSTAGRAM: string;
  FACEBOOK: string;
}

interface RANKS {
  [key: string] : string
}

export const DEFINITION = {
  FACTION_IMAGES: {
    'JEDI': {
      NORMAL: jedi,
      HOVER: jediHover,
    },
    'SITH': {
      NORMAL: sith,
      HOVER: sithHover,
    },
    'NEUTRAL': {
      NORMAL: neutral,
      HOVER: neutralHover,
    }
  } as FactionImages,


  SOCIAL: {
    INSTAGRAM: 'https://www.instagram.com/esgrimajedivalpo/',
    FACEBOOK: 'https://www.facebook.com/esgrimajedivalpo',
  } as SOCIAL,

  INSTRAGRAM_API: {
    PER_PAGE: 4
  },

  EMAIL: 'esgrimajedivalpo@gmail.com',


  RANKS: {
    CABALLERO: caballero,
    MAESTRO: maestro,
    APRENDIZ: padawan,
    INICIADO: padawan,
  } as RANKS
}
