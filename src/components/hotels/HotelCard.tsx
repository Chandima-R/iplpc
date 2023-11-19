'use client'

import { TruncateString } from '@/lib/truncateString';
import Image from 'next/image'

interface HotelCardProps {
    image: string;
    name: string;
    location: string;
    rating: number;
    amenities: string[];
    nearby: string[];
    description: string;
}
export const HotelCard = ({ image, name, location, rating, nearby, amenities, description}: HotelCardProps) => {
    return(
        <div className='rounded shadow max-w-[350px] w-full group cursor-pointer'>
            <div className='w-full h-56 overflow-hidden'>
                <Image
                    src={image}
                    width={1920}
                    height={1080}
                    alt="Placeholder"
                    className="rounded object-cover h-56 group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>
            <div className={'px-4 h-[300px]'}>
                <div className={'my-2 flex items-center justify-between'}>
                    <div>
                        <p className={'text-xl capitalize font-semibold'}>{name}</p>
                        <p className={'text-sm'}>{location}</p>
                    </div>
                </div>

                <div className={'flex gap-2 h-10 items-center'}>
                    {nearby.map(location => (
                        <div key={location}>
                            <p className={'text-xs rounded-full py-1 px-2 w-fit  border'}>{location}</p>
                        </div>
                    ))}
                </div>

                <div className={'my-4 h-32'}>
                    <p className={'text-sm mb-2'}>{TruncateString({str: description, maxLength:220})}</p>
                    <p className={'text-xs font-semibold'}>Rating: &nbsp; {rating}</p>
                </div>

                <div className={'flex gap-2 h-10 items-center'}>
                    {amenities.map(amenity => (
                        <div key={amenity}>
                            <p className={'text-xs rounded-full py-1 px-2 w-fit  border'}>{amenity}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}