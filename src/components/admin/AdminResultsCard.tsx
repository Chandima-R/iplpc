'use client'

import Image from 'next/image'

interface AdminResultsCardProps {
    image: string,
    category: string,
    date: string,
    time: string,
    score: number,
}

export const AdminResultsCard = ({image, category, date, time, score}: AdminResultsCardProps) => {
    return(
        <div className='rounded shadow max-w-[350px] min-w-[280px] w-full group'>
            <div className='w-full h-56 overflow-hidden'>
                <Image
                    src={image}
                    width={1920}
                    height={1080}
                    alt="Placeholder"
                    className="rounded object-cover h-56 group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>
            <div className='p-4'>
               <div className='flex items-center justify-between'>
                <div>
                        <div className='flex w-full items-center'>
                            <p className='text-sm capitalize'>category: &nbsp;</p>
                            <p className='text-base font-semibold'>{category}</p>
                        </div>

                        <div className='flex w-full items-center'>
                            <p className='text-sm capitalize'>Date: &nbsp;</p>
                            <p className='text-base font-semibold'>{date}</p>
                        </div>

                        <div className='flex w-full items-center'>
                            <p className='text-sm capitalize'>time: &nbsp;</p>
                            <p className='text-base font-semibold'>{time}</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}