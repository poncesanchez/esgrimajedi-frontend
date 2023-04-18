import esgrimaJediValparaiso from './../../assets/esgrimajedi-valparaiso-logo.svg';
import { getBackground } from './background-content';

export const Home = () => {
  const data = getBackground();

  return (
    <section id="home" className="relative">
      <div className="container mx-auto h-screen px-10 relative z-10">
        <div className="grid grid-cols-12 gap-5 h-screen items-center">
          <div className="col-span-12 sm:col-span-8 lg:col-span-4">
            <img src={esgrimaJediValparaiso} alt="Esgrima Jedi Valparaíso" className="mb-5" />
            <h1 className="font-secondary text-3xl text-secondary-100 my-3">{data.title}</h1>
            <p className="text-white font-primary text-sm font-medium mb-5">Si eres fanático de Star Wars y estás buscando una forma divertida y emocionante de vivirlo, estas en el lugar correcto.</p>
            <a href="#somos"
              className="bg-no-repeat bg-cover bg-center font-primary font-bold text-secondary-100 text-xs py-3 px-10 border-secondary-100 border tracking-widest bg-primary-100 inline-block
              hover:bg-secondary-100 hover:text-white
              ">
              VER MÁS
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${data.bg})` }}
        className="h-screen bg-no-repeat bg-center bg-cover absolute w-full top-0 left-0 right-0 bottom-0 z-0 opacity-20 sm:opacity-60 md:opacity-100"></div>
    </section>
  )
};