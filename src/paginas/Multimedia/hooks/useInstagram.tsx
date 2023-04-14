import { useEffect, useState } from "react";
import { instagramPost } from "../MultimediaType";
import { DEFINITION } from "./../../../config/definitions";
import instagramServices from "./../../../servicios/instagram";

export const useInstagram = () => {
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

   const postPrevio = (idPost: string) => {
      const index = posts.all.findIndex((item: instagramPost) => item.id === idPost);
      if ((index - 1) < 0) {
         return
      }
      const postNuevo = posts.all[(index - 1)];
      setPosts({
         ...posts,
         seleccionado: postNuevo
      });
   };

   const postSiguiente = (idPost: string) => {
      const index = posts.all.findIndex((item: instagramPost) => item.id === idPost);
      if ((index + 1) > posts.all.length) {
         return
      }
      const postNuevo = posts.all[(index + 1)];
      setPosts({
         ...posts,
         seleccionado: postNuevo
      });
   };

   return {
      //Posts
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
   }
};