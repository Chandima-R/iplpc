'use client'

import { TruncateString } from '@/lib/truncateString';

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
        <div className='rounded shadow max-w-[350px] w-full group cursor-pointer pb-4 hover:shadow-lg duration-300 ease-in-out transition-all cursor-pointer'>
            <div className='w-full h-56 overflow-hidden'>
                <img
                    src={image}
                    width={1920}
                    height={1080}
                    alt="Placeholder"
                    className="rounded object-cover h-56 group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>
            <div className={'px-4'}>
                <div className={'my-2 flex items-center justify-between h-16'}>
                    <div>
                        <p className={'text-xl capitalize font-semibold'}>{name}</p>
                        <p className={'text-lg'}>{location}</p>
                    </div>
                </div>

                <div className={'flex flex-col gap-1 justify-start h-28'}>
                    <p>Nearby Locations: </p>
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

                <div className={'h-28'}>
                    <p>
                        Amenities:
                    </p>
                    <div className={'grid gap-1 grid-cols-2'}>
                        {amenities.map(amenity => (
                            <div key={amenity}>
                                <p className={'text-xs rounded-full py-1 px-2 w-fit border'}>{amenity}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}