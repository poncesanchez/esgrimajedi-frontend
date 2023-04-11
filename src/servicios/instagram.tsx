import Axios from "./api";

const USER_ID = "6010035992379319";
const TOKEN   = "IGQVJXOUpBYlZAYQTB6c0VoYU1mZAHFOSWk2XzJCcTAzUmUtazE0UzNMbWhMVDhmLVZAxXzdqT3BGUjZAMcHFVWU8tVkwyS2c1U1JYRU5wVmE0NTdxVUtRem9mZADQtZAlgyeWIxbHdEY0tXUGtnX2xaMExCMAZDZD";

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