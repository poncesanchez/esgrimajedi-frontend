import imgRango from './../../assets/rango.svg';
import imgFondoSeccionSomos from './../../assets/fondo-seccion-somos.png';
import Add from '@mui/icons-material/Add';

export const Somos = () => {
  return (
    <section id="somos" className="relative">
      <div className="container mx-auto py-20  lg:h-screen px-5 relative z-10">
        <div className="grid grid-cols-12 gap-5 lg:h-screen items-center">

          <div className="col-span-12 md:col-span-6 relative sm:ml-10 mb-10 md:mb-0">
            <div className="relative flex z-10">
              <div className="w-full sm:w-10/12 lg:w-3/4">
                <div className="absolute z-30 w-full sm:w-10/12 lg:w-3/4 h-full flex text-center items-center justify-center">
                  <div className="w-10 h-10 border border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-white">
                    <Add className="mt-2" />
                  </div>
                </div>
                <div className="square-staff-border w-full sm:w-10/12 lg:w-3/4 h-96 absolute z-20" />
                <div className="square-staff absolute z-10 w-full sm:w-10/12 lg:w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                <div
                  style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
                  className="square-staff bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center" />
              </div>
            </div>
            <div className="absolute w-full flex top-5 right-4 z-0">
              <div className="w-full sm:w-10/12 lg:w-3/4">
                <div className="square-staff-border w-full sm:w-10/12 lg:w-3/4 h-96 absolute z-20" />
                <div className="absolute z-10 w-full sm:w-10/12 lg:w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                <div className="square-staff w-full h-96 z-0 bg-no-repeat bg-cover bg-center" />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <h2 className="font-secondary text-3xl text-white font-black tracking-[0.5rem] flex items-center mb-10">
              <span className="">SOMOS</span>
              <span className="relative flex w-full ml-3">
                <span className="h-[1px] w-full bg-secondary-100 inline-block opacity-30"></span>
                <span className="h-2 w-2 rounded-full bg-secondary-100 inline-block absolute right-0 -top-[3px]"></span>
              </span>
            </h2>
            <p className="text-white font-primary text-sm font-medium mb-5">Un grupo de fans de starwars que se dedica a la práctica de la esgrima con sables de luz, y recreación de peleas de starwars con el objetivo de realizar coreografías y posteriormente presentarlas en diversos eventos donde somos organización invitada.</p>
            <p className="text-white font-primary text-sm font-medium mb-5">Internamente nos organizamos en rangos según la expertíz y antigüedad.</p>

            <div className="grid grid-cols-12 my-8 sm:gap-8  md:gap-5">
              <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-center mb-6">
                <div className="h-20 w-20 rounded-full border border-secondary-100 m-auto mb-1 sm:mb-2 flex text-center items-center justify-center">
                  <img src={imgRango} className="w-12" alt="" />
                </div>
                <span className="font-secondary text-xs text-secondary-100 tracking-widest">INICIADOS</span>
              </div>

              <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-center mb-6">
                <div className="h-20 w-20 rounded-full border border-secondary-100 m-auto mb-1 sm:mb-2 flex text-center items-center justify-center">
                  <img src={imgRango} className="w-12" alt="" />
                </div>
                <span className="font-secondary text-xs text-secondary-100 tracking-widest">PADAWAN</span>
              </div>

              <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-center mb-6">
                <div className="h-20 w-20 rounded-full border border-secondary-100 m-auto mb-1 sm:mb-2 flex text-center items-center justify-center">
                  <img src={imgRango} className="w-12" alt="" />
                </div>
                <span className="font-secondary text-xs text-secondary-100 tracking-widest">CABALLERO</span>
              </div>

              <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-center mb-6">
                <div className="h-20 w-20 rounded-full border border-secondary-100 m-auto mb-1 sm:mb-2 flex text-center items-center justify-center">
                  <img src={imgRango} className="w-12" alt="" />
                </div>
                <span className="font-secondary text-xs text-secondary-100 tracking-widest">MAESTROS</span>
              </div>

              <div className="col-span-12">
                <a href="#"
                  className="bg-no-repeat bg-cover bg-center font-primary font-bold text-secondary-100 text-xs py-2 px-10 inline-block border-secondary-100 border tracking-widest bg-primary-100
                  hover:bg-secondary-100 hover:text-white
                  ">
                  CONOCER MÁS
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${imgFondoSeccionSomos})` }}
        className="lg:h-screen bg-no-repeat bg-center bg-cover absolute w-full top-0 left-0 right-0 bottom-0 z-0"></div>
    </section>
  )
}