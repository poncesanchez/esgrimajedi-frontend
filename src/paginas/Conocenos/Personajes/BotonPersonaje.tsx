import { useContext } from "react";
import { ConocenosContext } from "../context/ConocenosContext";
import { personaType } from "../../../types/persona";

export const BotonPersonaje = ({
  persona,
  index
} : {
  persona: personaType,
  index: number
}) => {

  const { 
    handlePersonaSeleccionada,
    personaSeleccionada 
} = useContext(ConocenosContext);

  return(
    <button 
      onClick={() => handlePersonaSeleccionada(persona)}
      key={index}>
      <div 
        className={`
          w-20 h-20 border border-primary-80 bg-no-repeat bg-center bg-cover hover:opacity-60
          ${personaSeleccionada.id ===  persona.id ? 'border-secondary-100 !opacity-100' : 'opacity-40' }
        `}
        style={{ backgroundImage: `url(${persona.image})`
        }}></div>
    </button>
  )
};