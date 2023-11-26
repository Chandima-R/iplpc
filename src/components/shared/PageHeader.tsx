import { Aperture } from "lucide-react"

interface RegisterHeaderProps {
    title: string;
    subtitle?: string;
}

export const PageHeader = ({title, subtitle}: RegisterHeaderProps) => {
    return(
       <div>
           <div>
               <div className="flex items-center mb-8">
                   <Aperture className="w-12 h-12 mr-4" />
                   <h1 className="text-3xl uppercase font-semibold tracking-wider">{title}</h1>
               </div>

               <p className="text-base font-normal">{subtitle}</p>
           </div>

           <hr className="my-2"/>
       </div>
    )
}