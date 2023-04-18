import { useContext } from "react";
import { ConocenosContext } from "../context/ConocenosContext";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { faccionType } from "../../../types/faccion";
import { DetallePersonaje } from "./DetallePersonaje";
import { ListadoPersonajes } from "./ListadoPersonajes";

export const Personajes = () => {
  const {
    faccionSeleccionada,
    handleReset,
  }: {
    faccionSeleccionada: faccionType,
    handleReset: Function
  } = useContext(ConocenosContext);

  return (
    <div>
      <div className="flex items-center border-b border-primary-80 pb-2">
        <IconButton
          onClick={() => handleReset()}
          className="hover:bg-secondary-100 hover:text-white">
          <KeyboardArrowLeft className="text-white mr-4" />
        </IconButton>
        <h2 className="font-primary text-sm sm:text-xl text-primary-30 font-light tracking-widest sm:tracking-[0.2rem]">FACCIÓN
          <b className="font-black tracking-widest sm:tracking-[0.5rem] text-white pl-4">{faccionSeleccionada.name}</b>
        </h2>
      </div>

      <ListadoPersonajes />
      <DetallePersonaje />
    </div>
  )
};