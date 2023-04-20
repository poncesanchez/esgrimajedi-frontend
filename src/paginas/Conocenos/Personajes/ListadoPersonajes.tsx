import { useContext } from "react"
import { ConocenosContext } from "../context/ConocenosContext"
import { personaType } from "../../../types/persona";
import { BotonPersonaje } from "./BotonPersonaje";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export const ListadoPersonajes = () => {

  const {
    personasFaccion,
  } = useContext(ConocenosContext);

  return (
    <>
      <div className="py-5">
        <Swiper
          className="px-10 sm:px-0"
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={10}
          navigation
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 10,
              spaceBetween: 40,
            }
          }}
        >
          {personasFaccion.map((persona: personaType, index: number) => {
            return (
              <SwiperSlide className="text-center">
                <BotonPersonaje persona={persona} index={index} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}