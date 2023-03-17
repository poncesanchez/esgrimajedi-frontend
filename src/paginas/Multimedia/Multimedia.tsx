import Mms from '@mui/icons-material/Mms';
import Add from '@mui/icons-material/Add';
import imgFondoSeccionMultimedia from './../../assets/fondo-seccion-multimedia.png';

export const Multimedia = () => {
  return (
    <section id="somos"
      style={{ backgroundImage: `url(${imgFondoSeccionMultimedia})` }}
      className="min-h-screen bg-no-repeat bg-top bg-contain pt-64 pb-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-12 gap-5 items-center">
        <div className="col-span-12 mb-20">
            <div className="max-w-md mx-auto">
              <div className="flex flex-col items-center mb-10">
                <span className="relative flex w-full">
                  <div className="rounded-full h-6 w-6 absolute left-0 -bottom-1.5 border-secondary-70 border text-center border-dashed">
                    <span className="h-2.5 w-2.5 rounded-full bg-secondary-100 inline-block relative -top-0.5"></span>
                  </div>
                  <div className="relative text-center w-full">
                    <div className="absolute w-full -top-3 z-20">
                      <span className="h-14 w-14 rounded-full border-2 border-secondary-100 mx-auto text-secondary-100 inline-flex items-center justify-center bg-primary-100">
                        <Mms />
                      </span>
                    </div>
                    <span className="h-[1px] w-full bg-secondary-100 inline-block opacity-30 z-0 relative" />
                  </div>
                  <div className="rounded-full h-6 w-6 absolute right-0 -bottom-1.5 border-secondary-70 border text-center border-dashed">
                    <span className="h-2.5 w-2.5 rounded-full bg-secondary-100 inline-block relative -top-0.5"></span>
                  </div>
                </span>
              </div>
              <h2 className="font-secondary text-2xl text-white font-black tracking-[0.5rem] flex-col flex items-center">
                MULTIMEDIA
              </h2>
            </div>
          </div>

          <div className="col-span-3">
            <div className="relative mx-4">
              <div className="absolute z-30 w-full h-full flex text-center items-center justify-center">
                <div className="w-10 h-10 border border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-white">
                  <Add className="mt-2" />
                </div>
              </div>
              <div className="absolute z-40 bottom-0 w-full p-5">
                <div className="text-center">
                  <h3 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0">Nombre Evento</h3>
                  <div className="text-primary-50 font-medium text-xs font-primary tracking-widest">16/03/2023</div>
                </div>
              </div>
              <div className="absolute z-40 w-full flex flex-col p-5">
                <div className="text-end">
                  <div className="text-white font-black font-secondary text-base">01</div>
                </div>
              </div>
              <div className="square-border w-full h-96 absolute z-20"></div>
              <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-100"></div>
              <div
                style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
                className="square bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center"></div> {/* bg de foto aquí */}
            </div>
          </div>

          <div className="col-span-3">
            <div className="relative mx-4">
              <div className="absolute z-30 w-full h-full flex text-center items-center justify-center">
                <div className="w-10 h-10 border border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-white">
                  <Add className="mt-2" />
                </div>
              </div>
              <div className="absolute z-40 bottom-0 w-full p-5">
                <div className="text-center">
                  <h3 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0">Nombre Evento</h3>
                  <div className="text-primary-50 font-medium text-xs font-primary tracking-widest">16/03/2023</div>
                </div>
              </div>
              <div className="absolute z-40 w-full flex flex-col p-5">
                <div className="text-end">
                  <div className="text-white font-black font-secondary text-base">02</div>
                </div>
              </div>
              <div className="square-border w-full h-96 absolute z-20"></div>
              <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-100"></div>
              <div
                style={{ backgroundImage: `url(https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/04/todas-peliculas-star-wars-clasificadas-peor-mejor-publico-2316225.jpg)` }}
                className="square bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center"></div> {/* bg de foto aquí */}
            </div>
          </div>

          <div className="col-span-3">
            <div className="relative mx-4">
              <div className="absolute z-30 w-full h-full flex text-center items-center justify-center">
                <div className="w-10 h-10 border border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-white">
                  <Add className="mt-2" />
                </div>
              </div>
              <div className="absolute z-40 bottom-0 w-full p-5">
                <div className="text-center">
                  <h3 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0">Nombre Evento</h3>
                  <div className="text-primary-50 font-medium text-xs font-primary tracking-widest">16/03/2023</div>
                </div>
              </div>
              <div className="absolute z-40 w-full flex flex-col p-5">
                <div className="text-end">
                  <div className="text-white font-black font-secondary text-base">03</div>
                </div>
              </div>
              <div className="square-border w-full h-96 absolute z-20"></div>
              <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-100"></div>
              <div
                style={{ backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg)` }}
                className="square bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center"></div> {/* bg de foto aquí */}
            </div>
          </div>

          <div className="col-span-3">
            <div className="relative mx-4">
              <div className="absolute z-30 w-full h-full flex text-center items-center justify-center">
                <div className="w-10 h-10 border border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-white">
                  <Add className="mt-2" />
                </div>
              </div>
              <div className="absolute z-40 bottom-0 w-full p-5">
                <div className="text-center">
                  <h3 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0">Nombre Evento</h3>
                  <div className="text-primary-50 font-medium text-xs font-primary tracking-widest">16/03/2023</div>
                </div>
              </div>
              <div className="absolute z-40 w-full flex flex-col p-5">
                <div className="text-end">
                  <div className="text-white font-black font-secondary text-base">04</div>
                </div>
              </div>
              <div className="square-border w-full h-96 absolute z-20"></div>
              <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-100"></div>
              <div
                style={{ backgroundImage: `url(https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg)` }}
                className="square bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center"></div> {/* bg de foto aquí */}
            </div>
          </div>


        </div>
      </div>

    </section>
  )
};