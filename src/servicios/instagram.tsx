import Axios from "./api";
import ENV_CONFIG from "./../config";

const instagramServices = {

   getPosts: function () {
      return Axios({
         method: 'get',
         url: `https://graph.instagram.com/${ENV_CONFIG.INSTAGRAM_USER}/media`,
         params: {
            limit: 40,
            fields: "id,media_type,media_url,permalink,caption,thumbnail_url,children{media_type,media_url,thumbnail_url},timestamp",
            access_token: ENV_CONFIG.INSTAGRAM_TOKEN
         }
      })
   }
}

export default instagramServices;