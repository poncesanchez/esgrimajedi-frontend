import Instagram from "@mui/icons-material/Instagram";
import Close from "@mui/icons-material/Close";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export const ModalInstagramPost = ({
   postPrevio,
   postSiguiente,
   postSeleccionado,
   handleClose,
}: {
   postPrevio: any,
   postSeleccionado: any,
   postSiguiente: any,
   handleClose: any,
}) => {

   const pagination = {
      clickable: true,
      renderBullet: function (index: number, className: string) {
         return '<span class="w-5 h-5 inline-block bg-secondary-100 border-2 border-white rounded-full shadow-lg ' + className + '"></span>';
      },
   };

   return (
      <div className="relative flex items-center">
         <div className="absolute -left-5 z-20">
            <button className="rounded-full" onClick={() => postPrevio(postSeleccionado.id)}>
               <span className="h-10 w-10 rounded-full border-2 border-primary-100 mx-auto text-primary-100 inline-flex items-center justify-center bg-white hover:bg-secondary-100 hover:border-secondary-100  hover:text-white shadow-lg">
                  <ChevronLeft />
               </span>
            </button>
         </div>
         <DialogContent className="!p-0 relative z-10">
            <DialogContentText>
               <div className="grid grid-cols-12 h-[90vh] sm:min-h-[80vh] relative">

                  {postSeleccionado.media_type === 'VIDEO' &&
                     <div className="col-span-12 sm:col-span-7 flex bg-black items-center h-full">
                        <video width="100%" height="100%" controls className="max-h-[80vh] mx-auto">
                           <source src={postSeleccionado.media_url} type='video/mp4' />
                        </video>
                     </div>
                  }

                  {postSeleccionado.media_type === 'IMAGE' &&
                     <div className="col-span-12 sm:col-span-7 bg-black flex h-full">
                        <img src={postSeleccionado.media_url} alt="" className="max-h-[80vh] m-auto" />
                     </div>
                  }

                  {postSeleccionado.media_type === 'CAROUSEL_ALBUM' &&
                     <div className="col-span-12 sm:col-span-7 bg-black flex h-full items-center">
                        <Swiper
                           spaceBetween={0}
                           pagination={pagination}
                           modules={[Pagination]}
                        >
                           {postSeleccionado.children.data.map((childrenPost: any) => {
                              return (
                                 <SwiperSlide>
                                    <img src={childrenPost.media_url} alt="" className="max-h-[80vh] m-auto" />
                                 </SwiperSlide>
                              )
                           })}
                        </Swiper>
                     </div>
                  }

                  <div className={postSeleccionado.media_type === 'VIDEO'
                     ? "col-span-12 sm:col-span-5 p-6 sm:p-10 font-primary h-full"
                     : "col-span-12 sm:col-span-5 p-6 sm:p-10 font-primary h-full"
                  }>
                     <p className="mb-4 text-sm text-black">{postSeleccionado.caption}</p>
                     <a href={postSeleccionado.permalink} target="_blank" className="border-2 border-secondary-100 py-2 px-4 inline-block text-black hover:bg-secondary-100 hover:text-white text-sm font-semibold">Ver más <Instagram /></a>
                  </div>
               </div>
            </DialogContentText>
         </DialogContent>
         <div className="absolute -top-5 -right-5 z-20">
            <button className="rounded-full" onClick={handleClose}>
               <span className="h-10 w-10 rounded-full  mx-auto text-secondary-100 inline-flex items-center justify-center bg-primary-90 hover:bg-secondary-100 hover:border-secondary-100  hover:text-white shadow-lg">
                  <Close />
               </span>
            </button>
         </div>

         <div className="absolute -right-5 z-20">
            <button className="rounded-full" onClick={() => postSiguiente(postSeleccionado.id)}>
               <span className="h-10 w-10 rounded-full border-2 border-primary-100 mx-auto text-primary-100 inline-flex items-center justify-center bg-white hover:bg-secondary-100 hover:border-secondary-100  hover:text-white shadow-lg">
                  <ChevronRight />
               </span>
            </button>
         </div>
      </div>
   )
};