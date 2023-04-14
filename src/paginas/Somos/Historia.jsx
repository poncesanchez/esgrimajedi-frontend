import { useEffect, useRef } from 'react';
import { Close, Replay } from '@mui/icons-material';
import audioOGG from './../../assets/audio/crawl-star-wars.ogg';
import audioMP3 from './../../assets/audio/crawl-star-wars.mp3';
import './historia.css';

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
            <p className="mb-40">En la mística ciudad de Santiago, dos hermanos se reunieron para cumplir un sueño que ardía en su corazón: vivir la experiencia de los legendarios combates con sables de luz de la saga de Star Wars. Con valentía y determinación, iniciaron este camino, sin saber que estaban dando origen a una verdadera epopeya.</p>

            <p className="mb-40">La chispa que encendieron aquellos dos hermanos pronto se extendió por todo Chile, y así nació Esgrima Jedi Chile, una agrupación que se dedica a recrear con pasión y devoción las icónicas batallas de las películas de la Guerra de las Galaxias.</p>

            <p className="mb-40">Pero esto no fue suficiente para los intrépidos jedis chilenos, pues su visión trascendía las fronteras de la capital. Y así, en la legendaria ciudad de Valparaíso, otro par de hermanos se unieron a la causa y decidieron llevar la luz de los sables a su propia tierra. Con la misma determinación y espíritu guerrero, iniciaron los entrenamientos y convocaron a los primeros aspirantes a caballeros jedi y a sith.</p>

            <p className="mb-40">Fue en el Centro Cultural de Valparaíso donde los primeros pasos fueron dados, y el grupo crecía con cada entrenamiento. Sin embargo, los valientes guerreros jedi pronto se dieron cuenta de que su labor necesitaba más visibilidad y más espacio para poder crecer. Es así como decidieron cambiar de templo, y eligieron el emblemático Arco Británico de Valparaíso, donde sus sables iluminarían el camino de todos los que quisieran unirse a su causa.</p>

            <p className="mb-40">Y así, semana tras semana, estos intrépidos guerreros fueron sumando fuerzas y destrezas, convirtiéndose en verdaderos maestros del arte de la esgrima jedi. Superando los obstáculos y aprendiendo de los errores, el grupo ha crecido y evolucionado, forjando un lazo de hermandad y camaradería que se extiende más allá de la galaxia misma.</p>

            <p className="mb-40">Hoy en día, Esgrima Jedi Chile Valparaiso es una verdadera leyenda en el país, una agrupación sin fines de lucro que inspira y emociona a todos los que tienen el valor y la determinación de unirse a su causa. Desde los iniciados hasta los maestros, todos comparten el mismo amor y pasión por esta noble causa, y juntos trabajan para mantener viva la llama de la Fuerza en sus corazones.</p>
            <p className="mb-40">Que la Fuerza los acompañe siempre!.</p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Historia;