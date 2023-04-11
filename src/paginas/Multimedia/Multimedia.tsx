import Mms from '@mui/icons-material/Mms';
import Add from '@mui/icons-material/Add';
import imgFondoSeccionMultimedia from './../../assets/fondo-seccion-multimedia.png';
import instagramServices from './../../servicios/instagram';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from '@mui/icons-material';
import { DEFINITION } from './../../config/definitions';
import { instagramPost } from './MultimediaType';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export const Multimedia = () => {
  /*  LOGICA POSTS INSTAGRAM  */
  const [ posts, setPosts ] = useState({
    current: [],
    all: [],
    seleccionado: {
      media_type: '',
      media_url: '',
      caption : '',
      permalink: ''
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

  const cargarPrevios = () => {
    const newInicial = posts.indexInicial-4;
    const newFinal = posts.indexFinal-4;

    setPosts({
      ...posts,
      indexInicial: newInicial,
      indexFinal: newFinal,
      current: posts.all.slice(newInicial, newFinal)
    })
  };

  const cargarSiguientes = () => {
    const newInicial = posts.indexFinal;
    const newFinal = posts.indexFinal+4;

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
  const handleClickOpen = (postSeleccionado : instagramPost) => {
    setPosts({
      ...posts,
      seleccionado: postSeleccionado
    });
    console.log(postSeleccionado);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setPosts({
      ...posts,
      seleccionado: {
        media_type: '',
        media_url: '',
        caption : '',
        permalink: ''
      }
    });
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
            <div className="absolute left-0">
              <button className="rounded-full" onClick={() => cargarPrevios()}>
                <span className="h-12 w-12 rounded-full border-2 border-secondary-100 mx-auto text-secondary-100 inline-flex items-center justify-center bg-primary-100 hover:bg-secondary-100 hover:text-primary-100 shadow-lg">
                  <ChevronLeft />
                </span>
              </button>
            </div>
          }

          {posts.current.map(( post : instagramPost ) => 
            <div className="col-span-12 xs:col-span-6 lg:col-span-3">
              <div className="relative mx-4">
                <div className="absolute z-30 w-full h-full flex text-center items-center justify-center">
                  <button 
                    onClick={() => handleClickOpen(post)}
                    className="w-10 h-10 border border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-white shadow-md">
                    <Add className="-mt-1"/>
                  </button>
                </div>
                <div className="square-border w-full h-96 absolute z-20"></div>
                <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-100"></div>
                <div
                  style={{ backgroundImage: `url(${post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url  })` }}
                  className="square bg-primary-90 w-full h-96 z-0 bg-no-repeat bg-cover bg-center"></div>
              </div>
            </div>
          )}

          {posts.indexInicial < 36 && 
            <div className="absolute right-0">
              <button className="rounded-full" onClick={() => cargarSiguientes()}>
                <span className="h-12 w-12 rounded-full border-2 border-secondary-100 mx-auto text-secondary-100 inline-flex items-center justify-center bg-primary-100 hover:bg-secondary-100 hover:text-primary-100 shadow-lg">
                  <ChevronRight />
                </span>
              </button>
            </div>
          }
          
          <Dialog open={open} onClose={handleClose} maxWidth={posts.seleccionado.media_type === 'VIDEO' ? "lg" :  "lg"}>
            <DialogContent className="!p-0">
              <DialogContentText>
                <div className="grid grid-cols-12 min-h-[80vh]">
                    {posts.seleccionado.media_type === 'VIDEO' &&
                      <div className="col-span-7 flex bg-black items-center">
                          <video width="100%" height="100%" autoPlay controls className="max-h-[80vh] mx-auto">
                            <source src={posts.seleccionado.media_url} type='video/mp4' />
                          </video>
                      </div>
                    }

                    {posts.seleccionado.media_type === 'IMAGE' &&
                      <div className="col-span-8 bg-black flex">
                        <img src={posts.seleccionado.media_url} alt="" className="max-h-[80vh] mx-auto" />
                      </div>
                    }

                  <div className={posts.seleccionado.media_type === 'VIDEO' ? "col-span-5 p-6 font-primary" : "col-span-4 p-6 font-primary"}>
                    <p className="mb-4 text-sm">{posts.seleccionado.caption}</p>
                    <a href={posts.seleccionado.permalink} target="_blank" className="border-2 border-secondary-100 py-2 px-4 inline-block text-black hover:bg-secondary-100 hover:text-white text-sm font-semibold">Ver más <Instagram /></a>
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
};



/* "children": {
  "data": [
      {
          "media_type": "IMAGE",
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/326785704_621823069723936_4474880579472686139_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Qvm5muapfokAX8yhKal&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBpGZyTG3e1vXqa1QD25ta60wZR_V8cOPiZgNm5OIoY5Q&oe=643A971E",
          "id": "17876516963826903"
      },
      {
          "media_type": "IMAGE",
          "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/332333706_568603728652919_1562774603231974087_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=PaMc8JV3fygAX_7uomL&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBYYKQdwkoBcGixfSNbvf5M3HOPRdgIwLUDZNoeVQCMeg&oe=6439D98C",
          "id": "17891707772783545"
      }
  ]
}, */