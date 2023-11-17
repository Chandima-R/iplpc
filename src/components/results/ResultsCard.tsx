'use client'
import Image from 'next/image'

interface ResultsCardProps {
    image: string,
    category: string,
    user: number,
    date: string,
    time: string,
    score: number,
}

export const ResultsCard = ({image, category, user, date, time, score}: ResultsCardProps) => {
    return(
        <div className='rounded shadow max-w-[350px] min-w-[280px] w-full group'>
            <div className='w-[350px] h-[250px] overflow-hidden'>
                <Image 
                    src={image}
                    width={350}
                    height={300}
                    alt="Placeholder"
                    className="rounded object-cover h-full group-hover:scale-105 transition-all duration-500 ease-in-out"
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
                            <p className='text-sm capitalize'>Uploaded by: &nbsp;</p>
                            <p className='text-base font-semibold'>{user}</p>
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

                    <div className='flex items-center justify-end'>
                        <p className='text-4xl capitalize font-bold'>{score}&nbsp;</p>
                        <p className='text-sm text-md'>/ 100</p>
                    </div>
               </div>
            </div>
        </div>
    )
}