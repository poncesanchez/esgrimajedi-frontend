import { useContext } from "react";
import { Faccion } from "./Faccion";
import { ConocenosContext } from "../context/ConocenosContext";

export const SeleccionFacciones = () => {

  const { facciones } = useContext(ConocenosContext);

  return (
    <div className="grid grid-cols-12 sm:gap-10 justify-center">
      <div className="col-span-12 text-center">
        <div className="font-secondary text-xs text-secondary-100 tracking-widest">
          SELECCIONA UNA FACCION</div>
      </div>

      {facciones.map(
        (faccion: any, index: number) => <Faccion key={index} data={faccion} />
      )}
    </div>
  )
}