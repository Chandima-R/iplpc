'use client'

import { TruncateString } from '@/lib/truncateString';

interface LocationCardProps {
    image: string;
    name: string;
    location: string;
    rating: number;
    hotels? : Hotel[];
    description: string;
    attractions?: string[];
}

type Hotel = {
    id: number;
    name: string;
    location: string;
    rating: number;
    price: number;
    description: string;
    amenities: string[];
    image: string;
    nearbyLocations: string[];
}

export const LocationCard = ({ image, name, location, rating, hotels, description, attractions}: LocationCardProps) => {
    return(
        <div className='rounded shadow max-w-[350px] w-full group cursor-pointer'>
            <div className='w-full h-56 overflow-hidden'>
                <img
                    src={image}
                    width={1920}
                    height={1080}
                    alt="Placeholder"
                    className="rounded object-cover h-56 group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>
            <div className={'px-4 h-[320px]'}>
                <div className={'my-2 flex items-center justify-between'}>
                    <div>
                        <p className={'text-xl capitalize font-semibold'}>{name}</p>
                        <p className={'text-sm'}>{location}</p>
                    </div>
                </div>

                <div className={'flex flex-col gap-2 items-center'}>
                    {hotels?.map(hotel => (
                        <div key={hotel?.name} className='flex w-full items-center justify-between  rounded-full py-1 px-2  border'>
                            <p className={'text-xs'}>{TruncateString({str: hotel?.name, maxLength: 20})}</p>
                            <p className='text-xs'>{hotel?.rating}</p>
                        </div>
                    ))}
                </div>

                <div className={'my-4'}>
                    <p className={'text-sm mb-2'}>{TruncateString({str: description, maxLength:220})}</p>
                    <p className={'text-xs font-semibold'}>Rating: &nbsp; {rating}</p>
                </div>

                <div className={'flex flex-col gap-2 w-full items-start justify-start'}>
                    {attractions?.map(attraction => (
                        <div key={attraction} className='w-auto'>
                            <p className={'text-xs rounded-full py-1 px-2 w-auto border'}>{attraction}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}