'use client'

import Image from 'next/image'
import {usePathname} from "next/navigation";
import {categoryData} from "@/components/admin/categoryData";

interface AdminImageCardProps {
    imageId: number,
    imageUrl: string,
    date: string,
    location: string,
    iso: number,
    shutterSpeed: string,
    aperture: string,
    whiteBalance: string,
    exposure: number,
    focus: string,
    meteringMode: string,
    fileFormat: string,
    resolution: string,
}
export const AdminImageCard = ({
   imageId,
   imageUrl,
   aperture,
   fileFormat,
   exposure,
   iso,
   focus,
   meteringMode,
   resolution,
   location,
   whiteBalance,
   shutterSpeed,
   date
}: AdminImageCardProps) => {
    const pathname = usePathname();
    const category = categoryData?.find((category) => category?.categoryId === Number(pathname?.split('/')[2]))?.categoryName

    return(
        <div className='rounded shadow max-w-[350px] min-w-[280px] w-full group'>
            <div className='w-full h-56 overflow-hidden'>
                <Image
                    src={imageUrl}
                    width={1920}
                    height={1080}
                    alt={imageId.toString()}
                    className="rounded object-cover h-56 group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>
            <div className='p-4 w-full'>
               <div className='flex items-center justify-between w-full'>
                    <div className={'w-full'}>
                        <div className='flex w-full items-center justify-between'>
                            <div className={'flex items-center'}>
                                <p className='text-sm capitalize'>category:&nbsp;</p>
                                <p className='text-base font-semibold ml'>{category}</p>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2'>
                            <p className='text-base'>Location:&nbsp;{location}</p>
                            <p className='text-sm'>Date:&nbsp;{date}</p>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2'>
                            <p className='text-sm'>Aperture:&nbsp;{aperture}</p>
                            <p className='text-sm'>Exposure:&nbsp;{exposure}</p>
                            <p className='text-sm'>Focus:&nbsp;{focus}</p>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2'>
                            <p className='text-sm'>ISO:&nbsp;{iso}</p>
                            <p className='text-sm'>Shutter Speed:&nbsp;{shutterSpeed}</p>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2'>
                            <p className='text-sm'>White Balance:&nbsp;{whiteBalance}</p>
                            <p className='text-sm'>Metering Mode:&nbsp;{meteringMode}</p>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2'>
                            <p className='text-sm'>Resolution:&nbsp;{resolution}</p>
                            <p className='text-sm'>File Format:&nbsp;{fileFormat}</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}