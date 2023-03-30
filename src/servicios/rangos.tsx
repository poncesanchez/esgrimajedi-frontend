import Axios from "./api";

const RangosServices = {

   getRangos: function () {
      return Axios({
         method: 'get',
         url: '/ranks',
      })
   }

}

export default RangosServices;