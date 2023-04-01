import { useContext } from "react";
import { ConocenosContext } from "../context/ConocenosContext";

export const Personajes = () => {

  const { faccionSeleccionada, personasFaccion, personaSeleccionada } = useContext(ConocenosContext);

  return(
    <div>
      <div>
        <h2 className="font-secondary text-2xl text-white font-black tracking-[0.5rem]">{faccionSeleccionada.name}</h2>
      </div>
    </div>
  )
};