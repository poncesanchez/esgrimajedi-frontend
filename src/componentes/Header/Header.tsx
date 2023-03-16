import esgrimaLogo from './../../assets/esgrima-logo.svg'

export const Header = () => {
  return (
    <header className="py-1.5 fixed w-full left-0 right-0 border-b border-b-primary-90 bg-gradient-to-b from-primary-100 to-transparent">
      <div className="container mx-auto px-5">
        <div className="flex justify-items-center items-center">
          <div className="w-2/12">
            <div className="text-start flex">
              <img src={esgrimaLogo} className="w-16 p-1.5" alt="Esgrima Jedi Valparaíso" />
            </div>
          </div>
          <div className="w-8/12 justify-center">
            <nav className="font-primary text-white uppercase text-xs font-bold tracking-widest py-4">
              <ul className="flex justify-center">
                <li className="mx-2">
                  <a className="px-4 py-2 hover:text-secondary-100" href="#somos">Somos</a>
                </li>
                <li className="mx-2">
                  <a className="px-4 py-2" href="#somos">Conocenos</a>
                </li>
                <li className="mx-2">
                  <a className="px-4 py-2" href="#somos">Multimedia</a>
                </li>
                <li className="mx-2">
                  <a className="px-4 py-2" href="#somos">Unete</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-2/12">
            <div>
              <a href="#">
                instagram_
              </a>
              <a href="#">
                facebook_
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="grid grid-cols-12 gap-5 justify-items-center items-center">
        <div className="col-span-2">
          <div className="text-start flex">
            <img src={esgrimaLogo} className="w-16" alt="Esgrima Jedi Valparaíso" />
          </div>
        </div>
        <div className="col-span-8 text-center">
          <nav className="font-primary text-white uppercase text-xs font-bold tracking-widest">
            <ul className="flex">
              <li className="mx-2">
                <a className="px-4 py-2 hover:text-secondary-100" href="#somos">Somos</a>
              </li>
              <li className="mx-2">
                <a className="px-4 py-2" href="#somos">Conocenos</a>
              </li>
              <li className="mx-2">
                <a className="px-4 py-2" href="#somos">Multimedia</a>
              </li>
              <li className="mx-2">
                <a className="px-4 py-2" href="#somos">Unete</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-2">
          <div>
            <a href="#">
              instagram_
            </a>
            <a href="#">
              facebook_
            </a>
          </div>
        </div>
      </div> */}
    </header>
  )
};