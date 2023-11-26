import { Aperture } from "lucide-react"

interface RegisterHeaderProps {
    title: string;
    subtitle?: string;
}

export const PageHeader = ({title, subtitle}: RegisterHeaderProps) => {
    return(
       <div className={'w-full flex flex-col justify-center items-center'}>
           <div>
               <div className="flex items-center mb-2">
                   <Aperture className="w-12 h-12 mr-4" />
                   <h1 className="text-3xl uppercase font-semibold tracking-wider">{title}</h1>
               </div>

               <p className="text-base font-normal">{subtitle}</p>
           </div>

           <hr className="my-2 w-full"/>
       </div>
    )
}