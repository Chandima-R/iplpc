'use client'

import {usePathname} from "next/navigation";
import {categoryData} from "@/components/admin/categoryData";

type ResultType = {
    imageId?: number,
    imageUrl?: string,
    date?: string,
    location?: string,
    iso?: number,
    shutterSpeed?: string,
    aperture?: string,
    whiteBalance?: string,
    exposure?: number,
    focus?: string,
    meteringMode?: string,
    fileFormat?: string,
    resolution?: string,
}
interface AdminImageCardProps {
    result: ResultType
}
export const ImageCard = ({
                                   result
                               }: AdminImageCardProps) => {
    const pathname = usePathname();
    const category = categoryData?.find((category) => category?.categoryId === Number(pathname?.split('/')[2]))?.categoryName

    return(
        <div className={`rounded shadow max-w-[350px] min-w-[300px] w-full group bg-white`}>
            <div className='w-full h-56 overflow-hidden relative'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={result?.imageUrl}
                    width={1920}
                    height={1080}
                    alt={result?.location}
                    className="rounded object-cover h-56 group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>
            <div className='p-4 w-full'>
                <div className='flex items-center justify-between w-full'>
                    <div className={'w-full'}>
                        <div className='flex w-full items-center justify-between h-10'>
                            <div className={'flex items-center'}>
                                <p className='text-sm capitalize'>category:&nbsp;</p>
                                <p className='text-base font-semibold ml'>{category}</p>
                            </div>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2 h-6'>
                            <p className='text-base'>Location:&nbsp;{result?.location}</p>
                            <p className='text-sm'>Date:&nbsp;{result?.date}</p>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2 h-6'>
                            <p className='text-sm'>Aperture:&nbsp;{result?.aperture}</p>
                            <p className='text-sm'>Exposure:&nbsp;{result?.exposure}</p>
                            <p className='text-sm'>Focus:&nbsp;{result?.focus}</p>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2 h-6'>
                            <p className='text-sm'>ISO:&nbsp;{result?.iso}</p>
                            <p className='text-sm'>Shutter Speed:&nbsp;{result?.shutterSpeed}</p>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2 h-6'>
                            <p className='text-sm'>White Balance:&nbsp;{result?.whiteBalance}</p>
                            <p className='text-sm'>Metering Mode:&nbsp;{result?.meteringMode}</p>
                        </div>

                        <div className='flex w-full items-center justify-between mb-2 h-6'>
                            <p className='text-sm'>Resolution:&nbsp;{result?.resolution}</p>
                            <p className='text-sm'>File Format:&nbsp;{result?.fileFormat}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}