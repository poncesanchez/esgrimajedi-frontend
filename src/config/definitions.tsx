import jedi from '../assets/facciones/jedi.svg';
import jediHover from '../assets/facciones/jedi-hover.svg';
import sith from '../assets/facciones/sith.svg';
import sithHover from '../assets/facciones/sith-hover.svg';
import neutral from '../assets/facciones/neutral.svg';
import neutralHover from '../assets/facciones/neutral-hover.svg';

interface FactionImages {
  [key: string]: {
    NORMAL: string;
    HOVER: string;
  };
}

export const DEFINITION = {
  FACTION_IMAGES : {
    'JEDI': {
      NORMAL: jedi,
      HOVER:  jediHover,
    },
    'SITH': {
      NORMAL: sith,
      HOVER:  sithHover,
    },
    'NEUTRAL': {
      NORMAL: neutral,
      HOVER:  neutralHover,
    }
  } as FactionImages
}
