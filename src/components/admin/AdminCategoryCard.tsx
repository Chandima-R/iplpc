'use client'

import Image from 'next/image'

interface AdminResultsCardProps {
    image: string,
    category: string,
    count: number,
    description?: string
}

export const AdminCategoryCard = ({image, category, description, count}: AdminResultsCardProps) => {
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
            <div className='p-4 w-full'>
               <div className='flex items-center justify-between w-full'>
                    <div className={'w-full'}>
                        <div className='flex w-full items-center justify-between'>
                            <div className={'flex items-center'}>
                                <p className='text-sm capitalize'>category: &nbsp;</p>
                                <p className='text-base font-semibold ml'>{category}</p>
                            </div>
                            <div>
                                <p className={'text-sm'}>{count}</p>
                            </div>
                        </div>

                        <div className='flex w-full items-center'>
                            <p className='text-base'>{description}</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}