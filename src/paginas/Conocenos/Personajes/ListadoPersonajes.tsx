import { useContext } from "react"
import { ConocenosContext } from "../context/ConocenosContext"
import { personaType } from "../../../types/persona";
import { BotonPersonaje } from "./BotonPersonaje";

export const ListadoPersonajes = () => {

  const { 
    personasFaccion,
    setPersonaSeleccionada, 
    personaSeleccionada 
} = useContext(ConocenosContext);

  return(
    <div className="flex gap-5 py-5">
      {personasFaccion.map(( persona : personaType , index : number ) => {
        return <BotonPersonaje persona={persona} index={index} />
      })}
    </div>
  )
}