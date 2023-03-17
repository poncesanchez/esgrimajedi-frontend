import imgRango from './../../assets/rango.svg';

export const Conocenos = () => {
  return (
    <section id="conocenos">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="col-span-12 mb-16">
            <div className="max-w-md mx-auto">
              <div className="flex flex-col items-center mb-8">
                <span className="relative flex w-full">
                  <div className="rounded-full h-6 w-6 absolute left-0 -bottom-1.5 border-secondary-70 border text-center border-dashed">
                    <span className="h-2.5 w-2.5 rounded-full bg-secondary-100 inline-block relative -top-0.5"></span>
                  </div>
                  <div className="relative text-center w-full">
                    <div className="absolute w-full -top-2.5">
                      <span className="h-12 w-12 rounded-full border-2 border-secondary-100 mx-auto text-secondary-100 inline-flex items-center justify-center">
                        <img src={imgRango} className="w-8" alt="" />
                      </span>
                    </div>
                    <span className="h-[1px] w-full bg-secondary-100 inline-block opacity-30"></span>
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
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1">
            <div>
              <div className="grid grid-cols-2">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <h3>Simón</h3>
                  <div>
                    <img src="#" alt="" />
                    <span>Maestro Jedi mon kloon</span>
                  </div>

                  <div className="divisor"></div>

                  <p className="text-primary-70 font-primary text-sm font-medium">Su habilidad con el sable y su dedicación enseñando idiomas a los padawans lo volvieron un ilustre miembro del Consejo Jedi.</p>
                  <p className="text-primary-70 font-primary text-sm font-medium">Se caracteriza por su paciencia y temple, se dice que en algún momento de su servicio aprendió una técnica secreta llamada "juicio eléctrico", una variación no-oscura de la técnica "rayos de fuerza".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}