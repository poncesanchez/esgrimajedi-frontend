import { useContext, useState } from "react"
import { ConocenosContext } from "../context/ConocenosContext"
import { DEFINITION } from "./../../../config/definitions";
import { FaccionItemType } from './FaccionItemType';

export const Faccion = ({ data }: FaccionItemType) => {

  const { handleFaccionElegida } = useContext(ConocenosContext);
  const [ isOver, setIsOver ] = useState(false);

  const FAC_NAME = data.name.toUpperCase();
  const FAC_IMAGE = DEFINITION.FACTION_IMAGES[FAC_NAME];

  return(
    <div className="col-span-12 xs:col-span-6 lg:col-span-4 text-center">
      <div className="relative mx-auto">
        <button 
          onClick={() => handleFaccionElegida(data)}
          onMouseOver={() => setIsOver(true)} 
          onMouseOut={() => setIsOver(false)} 
          className={`w-60 h-60`}>
          <img src={isOver ? FAC_IMAGE.HOVER : FAC_IMAGE.NORMAL} />
          <h3 className="text-white text-lg  font-primary font-black uppercase tracking-widest pb-0">{data.name}</h3>
        </button>
      </div>
    </div>
  )
}