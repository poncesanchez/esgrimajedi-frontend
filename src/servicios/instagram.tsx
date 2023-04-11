import Axios from "./api";

const USER_ID = "6010035992379319";
const TOKEN   = "IGQVJVc29uRmVyVUVEbXRKd243STIyMlpUSVltSHR3MHZAWMFp2Ny13TFQwbldoWnVSc0M5QllZAZA1J3cUpWTlpwQWFaMUIxREkxTkROMnBibE9uazZAwZAVZAaVWgzSEJ1Vlc4LW9rdGFCSHNjT1BrTFdiawZDZD";

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