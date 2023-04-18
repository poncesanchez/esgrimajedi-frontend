import { useEffect, useRef } from 'react';
import { Close, Replay } from '@mui/icons-material';
import audioOGG from './../../assets/audio/crawl-star-wars.ogg';
import audioMP3 from './../../assets/audio/crawl-star-wars.mp3';
import './historia.css';
import { SOMOS } from './../../config/text';

export const Historia = ({
  onClose
}) => {
  const audioRef = useRef(null);
  const startRef = useRef(null);
  const animationRef = useRef(null);

  const resetAnimation = () => {
    startRef.current.style.display = 'block';
    const clonedAnimation = animationRef.current.cloneNode(true);
    animationRef.current.remove();
    animationRef.current = clonedAnimation;
  };

  const handleClick = () => {
    startRef.current.style.display = 'none';
    animationRef.current.style.display = 'block';
    audioRef.current.play();
    document.querySelector('.starwars').append(animationRef.current);
  };

  useEffect(() => {
    audioRef.current.addEventListener('ended', () => {
      audioRef.current.currentTime = 0;
      setTimeout(() => {
        resetAnimation();
      }, 8000);
    });

    handleClick();
  }, []);

  return (
    <article className="starwars min-h-[460px] relative">
      <div className="absolute right-0 top-0 z-10">
        <button onClick={onClose} className="border-secondary-100 border text-secondary-100 p-1 hover:bg-secondary-100 hover:text-white cursor-pointer">
          <Close />
        </button>
      </div>
      <audio preload="auto" ref={audioRef}>
        <source src={audioOGG} type="audio/ogg" />
        <source src={audioMP3} type="audio/mpeg" />
      </audio>
      <section className="start" ref={startRef}>
        <div className="h-full w-full flex justify-center items-center">
          <button
            className="start-button bg-no-repeat bg-cover bg-center font-primary font-bold text-secondary-100 text-xs py-2 px-10 inline-block border-secondary-100 border tracking-widest bg-primary-100
          hover:bg-secondary-100 hover:text-white"
            onClick={handleClick}>
            Reiniciar animación <Replay />
          </button>
        </div>
      </section>

      <div className="animation hidden" ref={animationRef}>
        <section className="intro">
          <div className="h-full w-full flex justify-center items-center">
            Hace mucho tiempo,<br />en una galaxia muy, muy lejana...
          </div>
        </section>

        <section className="titles">
          <div>
            {SOMOS.HISTORIA}
          </div>
        </section>
      </div>
    </article>
  );
};

export default Historia;