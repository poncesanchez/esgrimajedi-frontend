import ChevronRight from "@mui/icons-material/ChevronRight";

export const BotonSiguiente = ({
   onClickBotonSiguiente
}: {
   onClickBotonSiguiente: any
}) => {
   return (
      <div className="absolute right-0">
         <button className="rounded-full" onClick={onClickBotonSiguiente}>
            <span className="h-12 w-12 rounded-full border-2 border-secondary-100 mx-auto text-secondary-100 inline-flex items-center justify-center bg-primary-100 hover:bg-secondary-100 hover:text-primary-100 shadow-lg">
               <ChevronRight />
            </span>
         </button>
      </div>
   )
};