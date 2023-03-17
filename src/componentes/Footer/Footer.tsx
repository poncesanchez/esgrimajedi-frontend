import { Facebook, Instagram, MailOutline } from "@mui/icons-material"

export const Footer = () => {
   return (
      <footer className="py-4">
         <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-5 items-center">
               <div className="col-span-12 text-center">
                  <nav className="font-primary text-white uppercase text-xs font-bold tracking-widest py-4">
                     <ul className="flex justify-center">
                        <li className="mx-2">
                           <a className="px-4 py-2 hover:text-secondary-100" href="#somos">Somos</a>
                        </li>
                        <li className="mx-2">
                           <a className="px-4 py-2" href="#somos">Conocenos</a>
                        </li>

                        <li className="mx-2">
                           <a className="px-4 py-2" href="#somos">LOGO</a>
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
            </div>
            <div className="grid grid-cols-12 gap-5 items-center">
               <div className="col-span-12 text-center text-white">
                  <span className="m-2">
                     <a href="#">
                        <Instagram />
                     </a>
                  </span>
                  <span className="m-2">
                     <a href="#">
                        <Facebook />
                     </a>
                  </span>
                  <span className="m-2">
                     <a href="#">
                        <MailOutline />
                     </a>
                  </span>
               </div>
            </div>
         </div>
      </footer>
   )
};