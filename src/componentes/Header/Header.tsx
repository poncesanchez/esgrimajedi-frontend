import { Facebook, Instagram, MailOutline, Menu } from "@mui/icons-material"
import { useEffect, useState } from "react";
import esgrimaLogo from './../../assets/esgrima-logo.svg'

export const Header = () => {

  const [fixedHeader, setFixedHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector('.header-section');
    if (header) {
      const scrollTop = window.scrollY;
      setFixedHeader((scrollTop >= 250));
    }
  };

  return (
    <header className={`
      header-section fixed w-full left-0 right-0 border-b border-b-primary-90 bg-gradient-to-b from-primary-100 to-transparent transition-all delay-100 ease-in-out z-50
      ${fixedHeader ? 'bg-primary-100 shadow-2xl border-b-0' : ''}
    `}>
      <div className="container mx-auto px-5">
        <div className="flex justify-items-center items-center py-1.5">
          <div className="w-2/12">
            <div className="text-start flex">
              <img src={esgrimaLogo} className="w-16 p-1.5" alt="Esgrima Jedi Valparaíso" />
            </div>
          </div>

          <div className="hidden sm:block w-10/12">
            <div className="flex items-center">
              <div className="w-9/12 justify-center">
                <nav className="font-primary text-white uppercase text-xs font-bold tracking-widest py-4">
                  <ul className="flex justify-center">
                    <li className="mx-2">
                      <a className="px-4 py-2 hover:text-secondary-100" href="#somos">Somos</a>
                    </li>
                    <li className="mx-2">
                      <a className="px-4 py-2 hover:text-secondary-100" href="#conocenos">Conocenos</a>
                    </li>
                    <li className="mx-2">
                      <a className="px-4 py-2 hover:text-secondary-100" href="#multimedia">Multimedia</a>
                    </li>
                    <li className="mx-2">
                      <a className="px-4 py-2 hover:text-secondary-100" href="#unete">Unete</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-3/12 text-end">
                <div className="text-white">
                  <span className="m-3">
                    <a href="#">
                      <Instagram />
                    </a>
                  </span>
                  <span className="m-3">
                    <a href="#">
                      <Facebook />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="block sm:hidden w-10/12">
            <div className="flex items-center text-end justify-end">
              <div className="w-12/12 flex items-center">
                <div className="text-white py-4 mr-4">
                  <span className="m-4">
                    <a href="#">
                      <Instagram />
                    </a>
                  </span>
                  <span className="m-4">
                    <a href="#">
                      <Facebook />
                    </a>
                  </span>
                </div>
                <button
                  onClick={() => setOpenMenu(!openMenu)}
                  className="border border-primary-60 rounded w-10 h-10">
                  <Menu className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openMenu &&
        <div className="bg-primary-100">
          <nav className="font-primary text-white uppercase text-xs font-bold tracking-widest py-2">
            <ul className="mx-5 py-3 border-t border-primary-80">
              <li className="block">
                <a
                  onClick={() => setOpenMenu(!openMenu)}
                  className="hover:text-secondary-100 text-base py-2 block" href="#somos">Somos</a>
              </li>
              <li className="block">
                <a
                  onClick={() => setOpenMenu(!openMenu)}
                  className="hover:text-secondary-100 text-base py-2 block" href="#conocenos">Conocenos</a>
              </li>
              <li className="block">
                <a
                  onClick={() => setOpenMenu(!openMenu)}
                  className="hover:text-secondary-100 text-base py-2 block" href="#multimedia">Multimedia</a>
              </li>
              <li className="block">
                <a
                  onClick={() => setOpenMenu(!openMenu)}
                  className="hover:text-secondary-100 text-base py-2 block" href="#unete">Unete</a>
              </li>
            </ul>
          </nav>
        </div>
      }
    </header>
  )
};