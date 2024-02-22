'use client'

import {TruncateDescription} from "@/components/shared/TruncateDescription";
import {TruncateTitle} from "@/components/shared/TruncateTitle";

interface AwardCategoryCardProps {
    id: string;
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
        <div className={`rounded shadow w-full group bg-white cursor-pointer hover:shadow-lg transition-all ease-in-out duration-300`}>
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
                                    label?.length && label?.length > 30 ? (
                                        <TruncateTitle str={label} maxLength={30} />
                                    ): (
                                        <p className='text-xl font-bold ml'>{label}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='w-full items-center justify-between h-36'>
                            <p className='text-xs mb-1'>Description</p>
                            {
                                description?.length && description?.length > 200 ? (
                                    <TruncateDescription str={description} maxLength={300} />
                                ):(
                                    <p className={'text-sm'}>{description}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}