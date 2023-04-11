import CONFIG from "../config";
import Axios from "./api";

const USER_ID = CONFIG.INSTAGRAM_USER || '';
const TOKEN   =  CONFIG.INSTAGRAM_TOKEN || '';

const instagramServices = {

   getPosts: function () {
      return Axios({
         method: 'get',
         url: `https://graph.instagram.com/${USER_ID}/media`,
         params: {
          limit: 40,
          fields: "id,media_type,media_url,permalink,caption,thumbnail_url,children{media_type,media_url,thumbnail_url},timestamp",
          access_token: TOKEN
         }
      })
   }

}

export default instagramServices;