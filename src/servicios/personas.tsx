import Axios from "./api";

const PersonasServices = {

   getPersonas: function () {
      return Axios({
         method: 'get',
         url: '/persons',
      })
   }

}

export default PersonasServices;