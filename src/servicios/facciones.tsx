import Axios from "./api";

const FaccionesServices = {

   getFacciones: function () {
      return Axios({
         method: 'get',
         url: '/faction',
      })
   }

}

export default FaccionesServices;