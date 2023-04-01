import { Add } from "@mui/icons-material"
import { useContext } from "react"
import { ConocenosContext } from "../context/ConocenosContext"

type faccionType = {
  data : {
    name: string,
    description: string,
    id: number,
  }
}

export const Faccion = ({ data } : faccionType) => {

  const { handleFaccionElegida } = useContext(ConocenosContext);

  return(
    <div className="col-span-12 xs:col-span-6 lg:col-span-4">
      <div className="relative max-w-[280px] mx-auto">
        <div className="absolute z-30 w-full h-full flex text-center items-center justify-center" onClick={() => handleFaccionElegida(data)}>
          <div className="w-10 h-10 border border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-white">
            <Add className="mt-2" />
          </div>
        </div>
        <div className="absolute z-40 bottom-0 w-full p-5">
          <div className="text-center">
            <h3 className="text-secondary-100 font-primary font-black uppercase tracking-wider pb-0">{data.name}</h3>
          </div>
        </div>
        <div className="square-border w-full h-96 absolute z-20"></div>
        <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-100"></div>
        <div
          style={{ backgroundImage: `url(https://sm.ign.com/t/ign_es/feature/r/ranking-th/ranking-the-star-wars-movies-from-worst-to-best_hauh.1200.jpg)` }}
          className="square bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center"></div> {/* bg de foto aquí */}
      </div>
    </div>
  )
}