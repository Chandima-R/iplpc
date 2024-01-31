'use client'

import {TruncateDescription} from "@/components/shared/TruncateDescription";
import {TruncateTitle} from "@/components/shared/TruncateTitle";

interface AwardCategoryCardProps {
    id: number;
    label: string;
    coverImage: string;
    value: number;
    rules?: string[];
    description?: string;
    characteristics?: string[];
    note?: string
}

export const AwardCategoryCard = (
    {
        id,
        label,
        coverImage,
        value,
        rules,
        description,
        characteristics,
        note
    }: AwardCategoryCardProps
) => {
    return(
        <div className={`rounded shadow max-w-[350px] min-w-[300px] w-full group bg-white cursor-pointer hover:shadow-lg transition-all ease-in-out duration-300`}>
            <div className='w-full h-56 overflow-hidden relative'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={coverImage}
                    width={1920}
                    height={1080}
                    alt={label}
                    className="rounded object-cover h-56 group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>

            <div className='p-4 w-full'>
                <div className='flex items-center justify-between w-full'>
                    <div className={'w-full'}>
                        <div className='flex w-full items-center justify-between h-10 mb-2'>
                            <div className={'items-center'}>
                                <p className='text-xs capitalize'>category:&nbsp;</p>
                                {
                                    label?.length && label?.length > 20 ? (
                                        <TruncateTitle str={label} maxLength={20} />
                                    ): (
                                        <p className='text-xl font-bold ml'>{label}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='w-full items-center justify-between mb-2 h-36'>
                            <p className='text-xs mb-1'>Description</p>
                            {
                                description?.length && description?.length > 200 ? (
                                    <TruncateDescription str={description} maxLength={200} />
                                ):(
                                    <p className={'text-sm'}>{description}</p>
                                )
                            }
                        </div>

                        {/*<div className='w-full'>*/}
                        {/*    <p className='text-sm'></p>*/}
                        {/*    <p className='text-sm'>Exposure:&nbsp;</p>*/}
                        {/*    <p className='text-sm'>Focus:&nbsp;</p>*/}
                        {/*</div>*/}

                        {/*<div className='flex w-full items-center justify-between mb-2 h-6'>*/}
                        {/*    <p className='text-sm'>ISO:&nbsp;{result?.iso}</p>*/}
                        {/*    <p className='text-sm'>Shutter Speed:&nbsp;{result?.shutterSpeed}</p>*/}
                        {/*</div>*/}

                        {/*<div className='flex w-full items-center justify-between mb-2 h-6'>*/}
                        {/*    <p className='text-sm'>White Balance:&nbsp;{result?.whiteBalance}</p>*/}
                        {/*    <p className='text-sm'>Metering Mode:&nbsp;{result?.meteringMode}</p>*/}
                        {/*</div>*/}

                        {/*<div className='flex w-full items-center justify-between mb-2 h-6'>*/}
                        {/*    <p className='text-sm'>Resolution:&nbsp;{result?.resolution}</p>*/}
                        {/*    <p className='text-sm'>File Format:&nbsp;{result?.fileFormat}</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}