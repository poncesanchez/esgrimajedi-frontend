import imgRango from './../../assets/rango.svg';

export const Somos = () => {
  return (
    <section id="somos" className="h-screen">
      <div className="container mx-auto h-screen px-5">
        <div className="grid grid-cols-12 gap-5 h-screen items-center">
          <div className="col-span-6">
            <div>
              <div>

              </div>
            </div>
          </div>
          <div className="col-span-6">
            <h2 className="font-secondary text-3xl text-white font-black tracking-[0.5rem] flex items-center mb-10">
              <span className="">SOMOS</span>
              <span className="relative flex w-full ml-3">
                <span className="h-[1px] w-full bg-secondary-100 inline-block opacity-30"></span>
                <span className="h-2 w-2 rounded-full bg-secondary-100 inline-block absolute right-0 -top-[3px]"></span>
              </span>
            </h2>
            <p className="text-white font-primary text-sm font-medium mb-5">Un grupo de fans de starwars que se dedica a la práctica de la esgrima con sables de luz, y recreación de peleas de starwars con el objetivo de realizar coreografías y posteriormente presentarlas en diversos eventos donde somos organización invitada.</p>
            <p className="text-white font-primary text-sm font-medium mb-5">Internamente nos organizamos en rangos según la expertíz y antigüedad.</p>

            <div className="grid grid-cols-4 my-8">
              <div className="col-span-1 text-center">
                <div className="h-20 w-20 rounded-full border border-secondary-100 m-auto mb-2 flex text-center items-center justify-center">
                  <img src={imgRango} className="w-12" alt="" />
                </div>
                <span className="font-secondary text-xs text-secondary-100 tracking-widest">INICIADOS</span>
              </div>

              <div className="col-span-1 text-center">
                <div className="h-20 w-20 rounded-full border border-secondary-100 m-auto mb-2 flex text-center items-center justify-center">
                  <img src={imgRango} className="w-12" alt="" />
                </div>
                <span className="font-secondary text-xs text-secondary-100 tracking-widest">PADAWAN</span>
              </div>

              <div className="col-span-1 text-center">
                <div className="h-20 w-20 rounded-full border border-secondary-100 m-auto mb-2 flex text-center items-center justify-center">
                  <img src={imgRango} className="w-12" alt="" />
                </div>
                <span className="font-secondary text-xs text-secondary-100 tracking-widest">CABALLERO</span>
              </div>

              <div className="col-span-1 text-center">
                <div className="h-20 w-20 rounded-full border border-secondary-100 m-auto mb-2 flex text-center items-center justify-center">
                  <img src={imgRango} className="w-12" alt="" />
                </div>
                <span className="font-secondary text-xs text-secondary-100 tracking-widest">MAESTROS</span>
              </div>
            </div>

            <a href="#"
              className="bg-no-repeat bg-cover bg-center font-primary font-bold text-secondary-100 text-xs py-2 px-10 inline-block border-secondary-100 border tracking-widest bg-primary-100
              hover:bg-secondary-100 hover:text-white
              ">
              CONOCER MÁS
            </a>

          </div>
        </div>
      </div>

    </section>
  )
}