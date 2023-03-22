import imgFondoSeccionUnete from './../../assets/fondo-seccion-unete.png';

export const Unete = () => {
  return (
    <section
      id="unete"
      style={{ backgroundImage: `url(${imgFondoSeccionUnete})` }}
      className="min-h-screen bg-no-repeat bg-top bg-cover py-20">
      <div className="container mx-auto px-5 h-screen">
        <div className="grid grid-cols-12 gap-5 items-end h-screen pb-4">
          <div className="col-span-12 mb-16 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="uppercase text-white font-terciary text-center text-2xl font-normal mb-4">ELIGE tu lado<br />y únete al combate</h2>
              <p className="text-primary-50 font-primary text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipsicing ellit. Pellentesque tempus sagittis enim, in euismod enim viverra sed. Class aptent taciti sociosqu ad litora torquent per conobia nostra</p>

            </div>


          </div>
        </div>
      </div>
    </section>
  )
};