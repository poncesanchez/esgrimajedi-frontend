import imgRango from './../../assets/rango.svg';
import imgFondoSeccionConocenos from './../../assets/fondo-seccion-conocenos.png';
import imgRangoNivel from './../../assets/rango-ejemplo.svg';

export const Conocenos = () => {
  return (
    <section 
      id="conocenos"
      style={{ backgroundImage: `url(${imgFondoSeccionConocenos})` }}
      className="min-h-screen bg-no-repeat bg-bottom bg-cover py-20">
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
                        <img src={imgRango} className="w-8" alt="" />
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
                CONOCENOS
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10">
          
          <div className="col-span-6">
            <div className="relative flex">
              <div className="square-staff-border w-full h-96 absolute z-20" />
              <div className="w-1/2">
                <div className="square-staff-border w-1/2 h-96 absolute z-20" />
                <div className="square-staff absolute z-10 w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                <div
                  style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
                  className="square-staff bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center" />
              </div>
              <div className="w-1/2">
                <div className="absolute z-30 h-full w-1/2 p-5">
                  <h2 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0 text-lg my-3">Nombre Evento</h2>
                  
                  <div className="flex text-secondary text-secondary-100 uppercase text-sm tracking-[0.25rem] font-semibold pb-3">
                    <img src={imgRangoNivel} alt="rango" className="mr-2" />
                    <span>Maestro Jedi<br/>mon kloon</span>
                  </div>

                  <div className="flex mb-6">
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                    <div className="border-b border-secondary-100 opacity-30 w-full h-0.5"></div>
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                  </div>

                  <p className="text-white opacity-80 font-primary text-sm font-medium mb-4">Su habilidad con el sable y su dedicación enseñando idiomas a los padawans lo volvieron un ilustre miembro del Consejo Jedi.</p>
                  <p className="text-white opacity-80 font-primary text-sm font-medium">Se caracteriza por su paciencia y temple, se dice que en algún momento de su servicio aprendió una técnica secreta llamada "juicio eléctrico", una variación no-oscura de la técnica "rayos de fuerza".</p>
                </div>
                <div className="absolute z-10 w-1/2 h-full bg-gradient-to-b from-transparent to-primary-100 text-white" />
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="relative flex">
              <div className="square-staff-border w-full h-96 absolute z-20" />
              <div className="w-1/2">
                <div className="square-staff-border w-1/2 h-96 absolute z-20" />
                <div className="square-staff absolute z-10 w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                <div
                  style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
                  className="square-staff bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center" />
              </div>
              <div className="w-1/2">
                <div className="absolute z-30 h-full w-1/2 p-5">
                  <h2 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0 text-lg my-3">Nombre Evento</h2>
                  
                  <div className="flex text-secondary text-secondary-100 uppercase text-sm tracking-[0.25rem] font-semibold pb-3">
                    <img src={imgRangoNivel} alt="rango" className="mr-2" />
                    <span>Maestro Jedi<br/>mon kloon</span>
                  </div>

                  <div className="flex mb-6">
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                    <div className="border-b border-secondary-100 opacity-30 w-full h-0.5"></div>
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                  </div>

                  <p className="text-white opacity-80 font-primary text-sm font-medium mb-4">Su habilidad con el sable y su dedicación enseñando idiomas a los padawans lo volvieron un ilustre miembro del Consejo Jedi.</p>
                  <p className="text-white opacity-80 font-primary text-sm font-medium">Se caracteriza por su paciencia y temple, se dice que en algún momento de su servicio aprendió una técnica secreta llamada "juicio eléctrico", una variación no-oscura de la técnica "rayos de fuerza".</p>
                </div>
                <div className="absolute z-10 w-1/2 h-full bg-gradient-to-b from-transparent to-primary-100 text-white" />
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="relative flex">
              <div className="square-staff-border w-full h-96 absolute z-20" />
              <div className="w-1/2">
                <div className="square-staff-border w-1/2 h-96 absolute z-20" />
                <div className="square-staff absolute z-10 w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                <div
                  style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
                  className="square-staff bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center" />
              </div>
              <div className="w-1/2">
                <div className="absolute z-30 h-full w-1/2 p-5">
                  <h2 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0 text-lg my-3">Nombre Evento</h2>
                  
                  <div className="flex text-secondary text-secondary-100 uppercase text-sm tracking-[0.25rem] font-semibold pb-3">
                    <img src={imgRangoNivel} alt="rango" className="mr-2" />
                    <span>Maestro Jedi<br/>mon kloon</span>
                  </div>

                  <div className="flex mb-6">
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                    <div className="border-b border-secondary-100 opacity-30 w-full h-0.5"></div>
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                  </div>

                  <p className="text-white opacity-80 font-primary text-sm font-medium mb-4">Su habilidad con el sable y su dedicación enseñando idiomas a los padawans lo volvieron un ilustre miembro del Consejo Jedi.</p>
                  <p className="text-white opacity-80 font-primary text-sm font-medium">Se caracteriza por su paciencia y temple, se dice que en algún momento de su servicio aprendió una técnica secreta llamada "juicio eléctrico", una variación no-oscura de la técnica "rayos de fuerza".</p>
                </div>
                <div className="absolute z-10 w-1/2 h-full bg-gradient-to-b from-transparent to-primary-100 text-white" />
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="relative flex">
              <div className="square-staff-border w-full h-96 absolute z-20" />
              <div className="w-1/2">
                <div className="square-staff-border w-1/2 h-96 absolute z-20" />
                <div className="square-staff absolute z-10 w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                <div
                  style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
                  className="square-staff bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center" />
              </div>
              <div className="w-1/2">
                <div className="absolute z-30 h-full w-1/2 p-5">
                  <h2 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0 text-lg my-3">Nombre Evento</h2>
                  
                  <div className="flex text-secondary text-secondary-100 uppercase text-sm tracking-[0.25rem] font-semibold pb-3">
                    <img src={imgRangoNivel} alt="rango" className="mr-2" />
                    <span>Maestro Jedi<br/>mon kloon</span>
                  </div>

                  <div className="flex mb-6">
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                    <div className="border-b border-secondary-100 opacity-30 w-full h-0.5"></div>
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                  </div>

                  <p className="text-white opacity-80 font-primary text-sm font-medium mb-4">Su habilidad con el sable y su dedicación enseñando idiomas a los padawans lo volvieron un ilustre miembro del Consejo Jedi.</p>
                  <p className="text-white opacity-80 font-primary text-sm font-medium">Se caracteriza por su paciencia y temple, se dice que en algún momento de su servicio aprendió una técnica secreta llamada "juicio eléctrico", una variación no-oscura de la técnica "rayos de fuerza".</p>
                </div>
                <div className="absolute z-10 w-1/2 h-full bg-gradient-to-b from-transparent to-primary-100 text-white" />
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="relative flex">
              <div className="square-staff-border w-full h-96 absolute z-20" />
              <div className="w-1/2">
                <div className="square-staff-border w-1/2 h-96 absolute z-20" />
                <div className="square-staff absolute z-10 w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                <div
                  style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
                  className="square-staff bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center" />
              </div>
              <div className="w-1/2">
                <div className="absolute z-30 h-full w-1/2 p-5">
                  <h2 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0 text-lg my-3">Nombre Evento</h2>
                  
                  <div className="flex text-secondary text-secondary-100 uppercase text-sm tracking-[0.25rem] font-semibold pb-3">
                    <img src={imgRangoNivel} alt="rango" className="mr-2" />
                    <span>Maestro Jedi<br/>mon kloon</span>
                  </div>

                  <div className="flex mb-6">
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                    <div className="border-b border-secondary-100 opacity-30 w-full h-0.5"></div>
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                  </div>

                  <p className="text-white opacity-80 font-primary text-sm font-medium mb-4">Su habilidad con el sable y su dedicación enseñando idiomas a los padawans lo volvieron un ilustre miembro del Consejo Jedi.</p>
                  <p className="text-white opacity-80 font-primary text-sm font-medium">Se caracteriza por su paciencia y temple, se dice que en algún momento de su servicio aprendió una técnica secreta llamada "juicio eléctrico", una variación no-oscura de la técnica "rayos de fuerza".</p>
                </div>
                <div className="absolute z-10 w-1/2 h-full bg-gradient-to-b from-transparent to-primary-100 text-white" />
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <div className="relative flex">
              <div className="square-staff-border w-full h-96 absolute z-20" />
              <div className="w-1/2">
                <div className="square-staff-border w-1/2 h-96 absolute z-20" />
                <div className="square-staff absolute z-10 w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
                <div
                  style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
                  className="square-staff bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center" />
              </div>
              <div className="w-1/2">
                <div className="absolute z-30 h-full w-1/2 p-5">
                  <h2 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0 text-lg my-3">Nombre Evento</h2>
                  
                  <div className="flex text-secondary text-secondary-100 uppercase text-sm tracking-[0.25rem] font-semibold pb-3">
                    <img src={imgRangoNivel} alt="rango" className="mr-2" />
                    <span>Maestro Jedi<br/>mon kloon</span>
                  </div>

                  <div className="flex mb-6">
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                    <div className="border-b border-secondary-100 opacity-30 w-full h-0.5"></div>
                    <div className="w-5 h-0.5 border-b-2 border-secondary-100"></div>
                  </div>

                  <p className="text-white opacity-80 font-primary text-sm font-medium mb-4">Su habilidad con el sable y su dedicación enseñando idiomas a los padawans lo volvieron un ilustre miembro del Consejo Jedi.</p>
                  <p className="text-white opacity-80 font-primary text-sm font-medium">Se caracteriza por su paciencia y temple, se dice que en algún momento de su servicio aprendió una técnica secreta llamada "juicio eléctrico", una variación no-oscura de la técnica "rayos de fuerza".</p>
                </div>
                <div className="absolute z-10 w-1/2 h-full bg-gradient-to-b from-transparent to-primary-100 text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}