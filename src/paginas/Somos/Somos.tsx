import imgFondoSeccionSomos from './../../assets/fondo-seccion-somos.png';
import { useEffect, useState } from 'react';
import RangosServices from '../../servicios/rangos';
import Historia from './Historia';
import { SOMOS } from './../../config/text';
import { DEFINITION } from './../../config/definitions';

export const Somos = () => {

  const [rangos, setRangos] = useState([{ id: 0, name: '' }]);
  const [showHistoria, setShowHistoria] = useState(false);

  useEffect(() => {
    cargarRangos();
  }, []);

  const cargarRangos = async () => {
    const response = await RangosServices.getRangos();
    if (response.status === 200) {
      setRangos(response.data)
    }
  };


  return (
    <section id="somos" className="relative">
      <div className="container mx-auto py-20 lg:h-screen px-5 relative z-10 min-h-[500px]">
        {showHistoria
          ?
          <div className="border border-secondary-100 mt-20 max-h-[460px] bg-[#1d192a6d]">
            <Historia onClose={() => setShowHistoria(false)} />
          </div>
          :
          <>
            <div className="grid grid-cols-12 gap-5 lg:h-screen items-center">
              <div className="col-span-12 md:col-span-6 relative sm:ml-10 mb-10 md:mb-0 order-2 sm:order-1">
                <div className="relative flex z-10">
                  <div className="w-full sm:w-10/12 lg:w-3/4">
                    <div className="square-staff-border w-full sm:w-10/12 lg:w-3/4 h-64 sm:h-96 absolute z-20" />
                    <div className="square-staff absolute z-10 w-full sm:w-10/12 lg:w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                    <div
                      style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
                      className="square-staff bg-primary-90 w-full h-64 sm:h-96 z-0 bg-no-repeat bg-cover bg-center" />
                  </div>
                </div>
                <div className="absolute w-full flex top-5 right-4 z-0">
                  <div className="w-full sm:w-10/12 lg:w-3/4">
                    <div className="square-staff-border w-full sm:w-10/12 lg:w-3/4 h-64 sm:h-96 absolute z-20" />
                    <div className="absolute z-10 w-full sm:w-10/12 lg:w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                    <div className="square-staff w-full h-64 sm:h-96 z-0 bg-no-repeat bg-cover bg-center" />
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 order-1 sm:order-2">
                <h2 className="font-secondary text-3xl text-white font-black tracking-[0.5rem] flex items-center mb-10">
                  <span className="">{SOMOS.TITULO_SECCION}</span>
                  <span className="relative flex w-full ml-3">
                    <span className="h-[1px] w-full bg-secondary-100 inline-block opacity-30"></span>
                    <span className="h-2 w-2 rounded-full bg-secondary-100 inline-block absolute right-0 -top-[3px]"></span>
                  </span>
                </h2>
                {SOMOS.DESCRIPCION}
                <div className="grid grid-cols-12 lg:grid-cols-10 my-8 sm:gap-8  md:gap-5">
                  {rangos.map((rango, index) =>
                    <div key={rango.id} className="col-span-6 sm:col-span-6 lg:col-span-2 text-center mb-10 sm:mb-6">
                      <div className=" m-auto mb-1 sm:mb-2 flex text-center items-center justify-center">
                        <img src={DEFINITION.RANKS[rango.name]} className="w-24" alt="" />
                      </div>
                      <span className="font-secondary text-xs text-secondary-100 tracking-widest">{rango.name}</span>
                    </div>
                  )}

                  <div className="col-span-12 text-center sm:text-left">
                    <button onClick={() => setShowHistoria(true)}
                      className="bg-no-repeat bg-cover bg-center font-primary font-bold text-secondary-100 text-xs py-2 px-10 inline-block border-secondary-100 border tracking-widest bg-primary-100
                    hover:bg-secondary-100 hover:text-white
                    ">
                      VER HISTORIA
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </>
        }
      </div>
      <div
        style={{ backgroundImage: `url(${imgFondoSeccionSomos})` }}
        className="lg:h-screen bg-no-repeat bg-center bg-cover absolute w-full top-0 left-0 right-0 bottom-0 z-0"></div>
    </section>
  )
}