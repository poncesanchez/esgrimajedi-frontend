import Mms from '@mui/icons-material/Mms';
import Add from '@mui/icons-material/Add';
import imgFondoSeccionMultimedia from './../../assets/fondo-seccion-multimedia.png';
import instagramServices from './../../servicios/instagram';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import styles from './css/multimedia.module.css';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Close, Instagram } from '@mui/icons-material';
import { DEFINITION } from './../../config/definitions';
import { instagramPost } from './MultimediaType';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export const Multimedia = () => {
  /*  LOGICA POSTS INSTAGRAM  */
  const [posts, setPosts] = useState({
    current: [],
    all: [],
    seleccionado: {
      media_type: '',
      media_url: '',
      caption: '',
      permalink: '',
      id: '',
      children: {
        data: [
          {
            id: '',
            media_type: '',
            media_url: ''
          }
        ]
      }
    },
    indexInicial: 0,
    indexFinal: DEFINITION.INSTRAGRAM_API.PER_PAGE
  });

  const cargarPosts = async () => {
    const response = await instagramServices.getPosts();
    setPosts({
      ...posts,
      current: response.data.data.slice(posts.indexInicial, posts.indexFinal),
      all: response.data.data
    });
  };

  const cargarPostsPrevios = () => {
    const newInicial = posts.indexInicial - 4;
    const newFinal = posts.indexFinal - 4;

    setPosts({
      ...posts,
      indexInicial: newInicial,
      indexFinal: newFinal,
      current: posts.all.slice(newInicial, newFinal)
    })
  };

  const cargarPostsSiguientes = () => {
    const newInicial = posts.indexFinal;
    const newFinal = posts.indexFinal + 4;

    setPosts({
      ...posts,
      indexInicial: newInicial,
      indexFinal: newFinal,
      current: posts.all.slice(newInicial, newFinal)
    })
  };

  useEffect(() => {
    cargarPosts();
  }, []);


  /*  MODAL  */
  const [open, setOpen] = useState(false);
  const handleClickOpen = (postSeleccionado: instagramPost) => {
    setPosts({
      ...posts,
      seleccionado: postSeleccionado
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setPosts({
      ...posts,
      seleccionado: {
        media_type: '',
        media_url: '',
        caption: '',
        permalink: '',
        id: '',
        children: {
          data: [
            {
              id: '',
              media_type: '',
              media_url: ''
            }
          ]
        }
      }
    });
  };

  const postPrevio = (idPost : string) => {
    const index = posts.all.findIndex(( item : instagramPost ) => item.id === idPost);
    if((index - 1) < 0 ) { 
      return
    }
    const postNuevo = posts.all[(index - 1)];
    setPosts({
      ...posts,
      seleccionado: postNuevo
    });
  };

  const postSiguiente = (idPost: string) => {
    const index = posts.all.findIndex(( item : instagramPost ) => item.id === idPost);
    if((index + 1) > posts.all.length) { 
      return
    }
    const postNuevo = posts.all[(index + 1)];
    setPosts({
      ...posts,
      seleccionado: postNuevo
    });
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index : number , className : string) {
      return '<span class="w-5 h-5 inline-block bg-secondary-100 border-2 border-white rounded-full shadow-lg '+ className+'"></span>';
    },
  };


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
            <div className="absolute left-0">
              <button className="rounded-full" onClick={() => cargarPostsPrevios()}>
                <span className="h-12 w-12 rounded-full border-2 border-secondary-100 mx-auto text-secondary-100 inline-flex items-center justify-center bg-primary-100 hover:bg-secondary-100 hover:text-primary-100 shadow-lg">
                  <ChevronLeft />
                </span>
              </button>
            </div>
          }

          {posts.current.map((post: instagramPost) =>
            <div className="col-span-12 xs:col-span-6 lg:col-span-3">
              <div className="relative mx-4">
                <div className="absolute z-30 w-full h-full flex text-center items-center justify-center">
                  <button
                    onClick={() => handleClickOpen(post)}
                    className="w-10 h-10 border border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-white shadow-md">
                    <Add className="-mt-1" />
                  </button>
                </div>
                <div className="square-border w-full h-96 absolute z-20"></div>
                <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-100"></div>
                <div
                  style={{ backgroundImage: `url(${post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url})` }}
                  className="square bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center"></div>
              </div>
            </div>
          )}

          {posts.indexInicial < 36 &&
            posts.seleccionado.permalink === '' &&
            <div className="absolute right-0">
              <button className="rounded-full" onClick={() => cargarPostsSiguientes()}>
                <span className="h-12 w-12 rounded-full border-2 border-secondary-100 mx-auto text-secondary-100 inline-flex items-center justify-center bg-primary-100 hover:bg-secondary-100 hover:text-primary-100 shadow-lg">
                  <ChevronRight />
                </span>
              </button>
            </div>
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
            <div className="relative flex items-center">
              <div className="absolute -left-5 z-20">
                <button className="rounded-full" onClick={() => postPrevio(posts.seleccionado.id)}>
                  <span className="h-10 w-10 rounded-full border-2 border-primary-100 mx-auto text-primary-100 inline-flex items-center justify-center bg-white hover:bg-secondary-100 hover:border-secondary-100  hover:text-white shadow-lg">
                    <ChevronLeft />
                  </span>
                </button>
              </div>
              <DialogContent className="!p-0 relative z-10">
                <DialogContentText>
                  <div className="grid grid-cols-12 min-h-[80vh] relative">

                    {posts.seleccionado.media_type === 'VIDEO' &&
                      <div className="col-span-7 flex bg-black items-center h-full">
                        <video width="100%" height="100%" controls className="max-h-[80vh] mx-auto">
                          <source src={posts.seleccionado.media_url} type='video/mp4' />
                        </video>
                      </div>
                    }

                    {posts.seleccionado.media_type === 'IMAGE' &&
                      <div className="col-span-7 bg-black flex h-full">
                        <img src={posts.seleccionado.media_url} alt="" className="max-h-[80vh] m-auto" />
                      </div>
                    }

                    {posts.seleccionado.media_type === 'CAROUSEL_ALBUM' &&
                      <div className="col-span-7 bg-black flex h-full items-center">
                        <Swiper
                          spaceBetween={0}
                          pagination={pagination}
                          modules={[Pagination]}
                        >
                          {posts.seleccionado.children.data.map(( childrenPost ) => {
                            return (
                              <SwiperSlide>
                                <img src={childrenPost.media_url} alt="" className="max-h-[80vh] m-auto" />
                              </SwiperSlide>
                            )
                          })}
                        </Swiper>
                      </div>
                    }

                    <div className={posts.seleccionado.media_type === 'VIDEO' 
                      ? "col-span-5 p-10 font-primary h-full" 
                      : "col-span-5 p-10 font-primary h-full"
                    }>
                      <p className="mb-4 text-sm text-black">{posts.seleccionado.caption}</p>
                      <a href={posts.seleccionado.permalink} target="_blank" className="border-2 border-secondary-100 py-2 px-4 inline-block text-black hover:bg-secondary-100 hover:text-white text-sm font-semibold">Ver más <Instagram /></a>
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
                <button className="rounded-full" onClick={() => postSiguiente(posts.seleccionado.id)}>
                  <span className="h-10 w-10 rounded-full border-2 border-primary-100 mx-auto text-primary-100 inline-flex items-center justify-center bg-white hover:bg-secondary-100 hover:border-secondary-100  hover:text-white shadow-lg">
                    <ChevronRight />
                  </span>
                </button>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  )
};