import bgHome from './images/bg-home.png';
import esgrimaJediValparaiso from './../../assets/esgrimajedi-valparaiso-logo.svg';

export const Home = () => {
  return(
    <section id="home" 
      style={{backgroundImage: `url(${bgHome})`}}
      className="h-screen bg-no-repeat bg-center bg-cover"
    >
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 gap-5 h-screen items-center">
          <div className="col-span-4">
            <img src={esgrimaJediValparaiso} alt="Esgrima Jedi Valparaíso" className="mb-5" />
            <h1 className="font-secondary text-3xl text-secondary-100 my-3">Algún subtítulo para destacar</h1>
            <p className="text-white font-primary text-sm font-medium mb-5">Curabitur quis massa et lacus malesuada mattis. Sed mollis dolor hendrerit dui volutpat gravida. Pellentesque urna lorem, hendrerit eu pretium at, porttitor ac eros. Nunc fringilla rutrum nisl in tempor.</p>
            
            <a href="#" 
              className="bg-no-repeat bg-cover bg-center font-primary font-bold text-secondary-100 text-xs py-3 px-10 border-secondary-100 border tracking-widest bg-primary-100 inline-block
              hover:bg-secondary-100 hover:text-white
              ">
              VER MÁS
            </a>
          </div>
          <div className="col-span-8">
            foto_personajes.
          </div>
        </div>
      </div>
    </section>
  )
};