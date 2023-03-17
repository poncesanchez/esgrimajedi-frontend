import { Facebook, Instagram, MailOutline } from "@mui/icons-material"
import { useEffect, useState } from "react";
import esgrimaLogo from './../../assets/esgrima-logo.svg'

export const Header = () => {

  const [ fixedHeader , setFixedHeader ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector('.header-section');
    if(header){
      const scrollTop = window.scrollY;
      setFixedHeader((scrollTop >= 250));
    }
  };

  return (
    <header className={`
      header-section py-1.5 fixed w-full left-0 right-0 border-b border-b-primary-90 bg-gradient-to-b from-primary-100 to-transparent transition-all delay-100 ease-in-out z-50
      ${fixedHeader ? 'bg-primary-100 shadow-2xl border-b-0' : ''}
    `}>
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
    </header>
  )
};