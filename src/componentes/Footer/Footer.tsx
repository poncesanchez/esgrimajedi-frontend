import { Facebook, Instagram, MailOutline } from "@mui/icons-material"
import imgEsgrimaJedi from './../../assets/esgrima-jedi-chile-blanco.svg'
import { DEFINITION } from "./../../config/definitions";

export const Footer = () => {
   return (
      <footer className="py-4">
         <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-5 items-center">
               <div className="col-span-12 text-center">
                  <nav className="font-primary text-white uppercase text-xs font-bold tracking-widest py-4">
                     <div className="hidden sm:block">
                        <ul className="flex justify-center items-end">
                           <li className="mx-2 mb-3">
                              <a className="px-2 md:px-4 py-2 hover:text-secondary-100" href="#somos">Somos</a>
                           </li>
                           <li className="mx-2 mb-3">
                              <a className="px-2 md:px-4 py-2 hover:text-secondary-100" href="#conocenos">Conocenos</a>
                           </li>

                           <li className="mx-2">
                              <a className="px-4 inline-block" href="#home">
                                 <img src={imgEsgrimaJedi} alt="Esgrima Jedi" />
                              </a>
                           </li>

                           <li className="mx-2 mb-3">
                              <a className="px-2 md:px-4 py-2 hover:text-secondary-100" href="#multimedia">Multimedia</a>
                           </li>
                           <li className="mx-2 mb-3">
                              <a className="px-2 md:px-4 py-2 hover:text-secondary-100" href="#unete">Unete</a>
                           </li>
                        </ul>
                     </div>
                     <div className="block sm:hidden">
                        <ul className="flex justify-center items-end">
                           <li className="mx-2">
                              <a className="px-4 inline-block" href="#home">
                                 <img src={imgEsgrimaJedi} alt="Esgrima Jedi" />
                              </a>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
            <div className="grid grid-cols-12 gap-6 items-center">
               <div className="col-span-12 text-center text-white">
                  <span className="m-3 inline-block">
                     <a href={DEFINITION.SOCIAL.INSTAGRAM} target="_blank">
                        <Instagram />
                     </a>
                  </span>
                  <span className="m-3 inline-block">
                     <a href={DEFINITION.SOCIAL.FACEBOOK} target="_blank">
                        <Facebook />
                     </a>
                  </span>
                  <span className="m-3 inline-block">
                     <a href={`mailto:${DEFINITION.EMAIL}`}>
                        <MailOutline />
                     </a>
                  </span>
               </div>
            </div>
         </div>
      </footer>
   )
};