import { UNETE } from './../../config/text';
import imgFondoSeccionUnete from './../../assets/fondo-seccion-unete.png';
import { Divisor } from '../../componentes/Divisor/Divisor';

export const Unete = () => {
  return (
    <section
      id="unete"
      style={{ backgroundImage: `url(${imgFondoSeccionUnete})` }}
      className="min-h-screen bg-no-repeat bg-top bg-cover py-18">
      <div className="container mx-auto px-5 h-screen">
        <div className="grid grid-cols-12 gap-5 items-end h-screen pb-4">
          <div className="col-span-12 mb-10 text-center">
            <div className="max-w-lg mx-auto">
              <h2 className="uppercase text-white font-terciary text-center text-2xl font-normal mb-4">
                {UNETE.TITULO_SECCION}</h2>

                <Divisor />
                {UNETE.HORARIOS}
                <Divisor />

                {UNETE.DESCRIPCION}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};