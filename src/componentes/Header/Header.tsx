import { Facebook, Instagram, MailOutline } from "@mui/icons-material"
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
            <div className="text-white">
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};