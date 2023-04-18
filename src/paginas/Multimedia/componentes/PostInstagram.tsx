import Add from "@mui/icons-material/Add"
import { instagramPost } from "../MultimediaType"

export const PostInstagram = ({
   posts,
   onClickPost
}: {
   posts: any,
   onClickPost: any
}) => {
   return (
      <>
         {posts.current.map((post: instagramPost) =>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
               <div className="relative mx-4">
                  <div className="absolute z-30 w-full h-full flex text-center items-center justify-center">
                     <button
                        onClick={() => onClickPost(post)}
                        className="w-10 h-10 border border-secondary-100 text-secondary-100 hover:bg-secondary-100 hover:text-white shadow-md">
                        <Add className="-mt-1" />
                     </button>
                  </div>
                  <div className="square-border w-full h-96 lg:h-60 xl:h-96  absolute z-20"></div>
                  <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-100"></div>
                  <div
                     style={{ backgroundImage: `url(${post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url})` }}
                     className="square bg-primary-90 w-full h-96 lg:h-60 xl:h-96 z-0 bg-no-repeat bg-cover bg-center"></div>
               </div>
            </div>
         )}
      </>
   )
}