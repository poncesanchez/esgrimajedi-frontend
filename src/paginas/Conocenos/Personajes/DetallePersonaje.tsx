import { useContext } from "react";
import { ConocenosContext } from "../context/ConocenosContext";
import { Divisor } from "../../../componentes/Divisor/Divisor";
import { personaType } from "../../../types/persona";
import imgRangoNivel from './../../../assets/rango-ejemplo.svg';
import styles from './css/detallePersonaje.module.css';
import { DEFINITION } from "./../../../config/definitions";
import { faccionType } from "types/faccion";

export const DetallePersonaje = () => {

  const {
    personaSeleccionada,
    isLoadingPersona,
    faccionSeleccionada
  }: {
    personaSeleccionada: personaType,
    isLoadingPersona: boolean,
    faccionSeleccionada: faccionType
  } = useContext(ConocenosContext);

  const getRango = (rankname : string) => {
    const rango = DEFINITION.RANKS[rankname]
    return rango ? rango : imgRangoNivel;
  }

  const getImage = (image : string) => {
    if(image){
      return image;
    } else {
      console.log(faccionSeleccionada.name.toUpperCase());
      return DEFINITION.FACTION_IMAGES[faccionSeleccionada.name.toUpperCase()].PROFILE;
    }
  }

  return (
    <div className="col-span-12 lg:col-span-6 relative">
      <div className={`absolute w-full flex flex-col sm:flex-row h-[445px] transition ease-in
        ${isLoadingPersona ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="relative w-full">
          <div className="absolute z-30 w-full h-full flex text-center items-center justify-center">
            <span className="loader"></span>
          </div>
          <div className="square-staff-border w-full sm:h-[445px] absolute z-20"></div>
        </div>
      </div>

      <div className={`relative flex flex-col sm:flex-row sm:h-[445px] transition ease-in
        ${isLoadingPersona ? 'opacity-0' : 'opacity-100  duration-700'}
      `}>
        <div className="square-staff-border w-full sm:h-[445px] absolute z-20" />
        <div className="w-full sm:w-1/2">
          <div className="square-staff-border w-full sm:w-1/2 h-full absolute z-20" />
          <div className="square-staff absolute z-10 w-full sm:w-3/4 h-full bg-gradient-to-b from-transparent to-primary-100" />
          <div
            style={{ backgroundImage: `url(${getImage(personaSeleccionada.image)})` }}
            className="square-staff bg-primary-90 w-full h-[445px] z-0 bg-no-repeat bg-cover bg-center" />
        </div>
        <div className="w-full sm:w-1/2">
          <div className="relative sm:absolute z-30 h-full w-full sm:w-1/2 p-5 py-6">
            <div className="">
              <h2 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0 text-lg mt-1 mb-3">
                {personaSeleccionada.name}</h2>

              <div className="flex text-secondary text-secondary-100 uppercase text-sm sm:tracking-[0.25rem] font-semibold pb-3 items-center">
                <img src={getRango(personaSeleccionada.rankName)} className="w-14 mr-4" alt="" />
                <span>{personaSeleccionada.rankName}<br />{personaSeleccionada.fullName}</span>
              </div>
              <Divisor />
              <div className="overflow-y-auto h-56">
                <div
                  className={styles.historia}
                  dangerouslySetInnerHTML={{ __html: personaSeleccionada.history }} />
              </div>
            </div>
          </div>
          <div className="hidden sm:block absolute z-10 w-1/2 h-full bg-gradient-to-b from-transparent to-primary-100 text-white" />
        </div>
      </div>
    </div>
  )
}