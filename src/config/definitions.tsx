import jedi from '../assets/facciones/jedi.svg';
import jediHover from '../assets/facciones/jedi-hover.svg';
import default_jedi from '../assets/facciones/default_jedi.png';

import sith from '../assets/facciones/sith.svg';
import sithHover from '../assets/facciones/sith-hover.svg';
import default_sith from '../assets/facciones/default_sith.png';

import neutral from '../assets/facciones/neutral.svg';
import neutralHover from '../assets/facciones/neutral-hover.svg';
import default_neutral from '../assets/facciones/default_neutral.png';

import caballero from '../assets/rangos/knight.svg';
import padawan from '../assets/rangos/padawan.svg';
import maestro from '../assets/rangos/master.svg';

interface FactionImages {
  [key: string]: {
    NORMAL: string;
    HOVER: string;
    PROFILE: string;
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
      PROFILE: default_jedi
    },
    'SITH': {
      NORMAL: sith,
      HOVER: sithHover,
      PROFILE: default_sith
    },
    'NEUTRAL': {
      NORMAL: neutral,
      HOVER: neutralHover,
      PROFILE: default_neutral
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
