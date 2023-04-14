import Mms from '@mui/icons-material/Mms';
import imgFondoSeccionMultimedia from './../../assets/fondo-seccion-multimedia.png';
import Dialog from '@mui/material/Dialog';
import styles from './css/multimedia.module.css';
import { useInstagram } from './hooks/useInstagram';
import { BotonPrevio } from './componentes/BotonPrevio';
import { PostInstagram } from './componentes/PostInstagram';
import { BotonSiguiente } from './componentes/BotonSiguiente';
import { ModalInstagramPost } from './componentes/ModalInstagramPost';

export const Multimedia = () => {

  const {
    posts,
    cargarPostsPrevios,
    cargarPostsSiguientes,

    //Handlers modal
    open,
    handleClickOpen,
    handleClose,

    //Navegación slider modal
    postPrevio,
    postSiguiente
  } = useInstagram();

  return (
    <section id="multimedia"
      style={{ backgroundImage: `url(${imgFondoSeccionMultimedia})` }}
      className="min-h-screen bg-no-repeat bg-top bg-contain pt-52 pb-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="col-span-12 mb-20">
            <div className="max-w-md mx-auto">
              <div className="flex flex-col items-center mb-10">
                <span className="relative flex w-full">
                  <div className="rounded-full h-6 w-6 absolute left-0 -bottom-1.5 border-secondary-70 border text-center border-dashed">
                    <span className="h-2.5 w-2.5 rounded-full bg-secondary-100 inline-block relative -top-0.5"></span>
                  </div>
                  <div className="relative text-center w-full">
                    <div className="absolute w-full -top-3 z-20">
                      <span className="h-14 w-14 rounded-full border-2 border-secondary-100 mx-auto text-secondary-100 inline-flex items-center justify-center bg-primary-100">
                        <Mms />
                      </span>
                    </div>
                    <span className="h-[1px] w-full bg-secondary-100 inline-block opacity-30 z-0 relative" />
                  </div>
                  <div className="rounded-full h-6 w-6 absolute right-0 -bottom-1.5 border-secondary-70 border text-center border-dashed">
                    <span className="h-2.5 w-2.5 rounded-full bg-secondary-100 inline-block relative -top-0.5"></span>
                  </div>
                </span>
              </div>
              <h2 className="font-secondary text-2xl text-white font-black tracking-[0.5rem] flex-col flex items-center">
                MULTIMEDIA
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 items-center px-20 relative">
          {posts.indexFinal > 4 &&
            posts.seleccionado.permalink === '' &&
            <BotonPrevio onClickBotonPrevio={cargarPostsPrevios} />
          }

          <PostInstagram
            posts={posts}
            onClickPost={handleClickOpen}
          />

          {posts.indexInicial < 36 &&
            posts.seleccionado.permalink === '' &&
            <BotonSiguiente onClickBotonSiguiente={cargarPostsSiguientes} />
          }

          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={posts.seleccionado.media_type === 'VIDEO' ? "md" : "md"}
            classes={{
              root: styles.root,
              paper: styles.paper
            }}
          >
            <ModalInstagramPost
              postSeleccionado={posts.seleccionado}
              postPrevio={postPrevio}
              postSiguiente={postSiguiente}
              handleClose={handleClose}
            />
          </Dialog>
        </div>
      </div>
    </section>
  )
};