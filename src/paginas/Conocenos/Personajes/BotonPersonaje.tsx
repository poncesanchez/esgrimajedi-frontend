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
    setPersonaSeleccionada, 
    personaSeleccionada 
} = useContext(ConocenosContext);

  return(
    <button 
      onClick={() => setPersonaSeleccionada(persona)}
      key={index}>
      <div 
        className={`
          w-20 h-20 border border-primary-80 bg-no-repeat bg-center bg-cover
          ${personaSeleccionada.id ===  persona.id ? 'border-secondary-100 opacity-100' : 'opacity-40' }
        `}
        style={{ backgroundImage: 
            `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)`
        }}></div>
    </button>
  )
};