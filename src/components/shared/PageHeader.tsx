import Image from "next/image";

interface RegisterHeaderProps {
    image?: string;
    title: string;
    subtitle?: string;
}

export const PageHeader = ({image, title, subtitle}: RegisterHeaderProps) => {
    return(
       <div className={'w-full flex flex-col justify-center items-center'}>
           <div className={'flex flex-col items-center justify-center'}>
               <div className="flex items-center mb-2">
                   {image && (
                       <Image src={image} alt={image} width={40} height={50} className="mr-2"/>
                   )}
                   <h1 className="text-3xl uppercase font-semibold tracking-wider">{title}</h1>
               </div>

               <p className="text-base font-normal">{subtitle}</p>
           </div>

           <hr className="my-2 w-full"/>
       </div>
    )
}