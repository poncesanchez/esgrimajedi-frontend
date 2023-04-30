import imgRango from './../../assets/rango.svg';
import imgFondoSeccionConocenos from './../../assets/fondo-seccion-conocenos.png';
import { SeleccionFacciones } from './Facciones/SeleccionFacciones';
import { useContext, useEffect } from 'react';
import PersonasServices from '../../servicios/personas';
import FaccionesServices from '../../servicios/facciones';
import { ConocenosContext } from './context/ConocenosContext';
import { Personajes } from './Personajes/Personajes';

export const Conocenos = () => {

  const { vista, setData } = useContext(ConocenosContext);

  const getData = async () => {
    const state = {
      personas: [],
      facciones: [],
      vista: 'ELEGIR_FACCION'
    };

    try {
      const responsePersonas = await PersonasServices.getPersonas();
      if (responsePersonas.status === 200) {
        let shuffled = responsePersonas.data
          .map((value: any) => ({ value, sort: Math.random() }))
          .sort((a: any, b: any) => a.sort - b.sort)
          .map(({ value }: { value: any }) => value);

        state.personas = shuffled;
      }

      const responseFacciones = await FaccionesServices.getFacciones();
      if (responseFacciones.status === 200) {
        state.facciones = responseFacciones.data;
      }

      setData(state);
    } catch (error) {
      setData(state);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section
      id="conocenos"
      style={{ backgroundImage: `url(${imgFondoSeccionConocenos})` }}
      className="min-h-screen bg-no-repeat bg-bottom bg-cover py-40">
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

        {vista === 'ELEGIR_FACCION' &&
          <SeleccionFacciones />
        }

        {vista === 'PERSONAJES' &&
          <Personajes />
        }
      </div>
    </section>
  )
}