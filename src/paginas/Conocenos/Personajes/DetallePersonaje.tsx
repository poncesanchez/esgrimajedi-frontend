import { useContext } from "react";
import { ConocenosContext } from "../context/ConocenosContext";
import { Divisor } from "../../../componentes/Divisor/Divisor";
import { personaType } from "../../../types/persona";
import imgRangoNivel from './../../../assets/rango-ejemplo.svg';

export const DetallePersonaje = () => {

  const { 
    personaSeleccionada,
  } : { 
    personaSeleccionada : personaType,
  } = useContext(ConocenosContext);

  return(
    <div>
      <div className="col-span-12 lg:col-span-6">
        <div className="relative flex flex-col sm:flex-row">
          <div className="square-staff-border w-full h-96 absolute z-20" />
          <div className="w-full sm:w-1/2">
            <div className="square-staff-border w-full sm:w-1/2 h-96 absolute z-20" />
            <div className="square-staff absolute z-10 w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
            <div
              style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
              className="square-staff bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center" />
          </div>
          <div className="w-full sm:w-1/2">
            <div className="sm:absolute z-30 h-full w-full sm:w-1/2 p-5">
              <div className="">
                <h2 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0 text-lg my-3">
                  {personaSeleccionada.name}</h2>

                <div className="flex text-secondary text-secondary-100 uppercase text-sm sm:tracking-[0.25rem] font-semibold pb-3">
                  <img src={imgRangoNivel} alt="rango" className="mr-2" />
                  <span>Maestro Jedi<br />mon kloon</span>
                </div>
                <Divisor />
                <div className="overflow-y-auto h-56">
                  <div 
                    className=" text-white opacity-80 font-primary text-sm font-medium" 
                    dangerouslySetInnerHTML={{ __html : personaSeleccionada.history }} />
                </div>
              </div>
            </div>
            <div className="absolute z-10 w-1/2 h-full bg-gradient-to-b from-transparent to-primary-100 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}