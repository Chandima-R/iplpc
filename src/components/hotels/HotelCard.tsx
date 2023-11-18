'use client'

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
            <div className='w-[350px] h-[250px] overflow-hidden'>
                <Image
                    src={image}
                    width={350}
                    height={300}
                    alt="Placeholder"
                    className="rounded object-cover h-full group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>
            <div className={'px-4 h-42'}>
                <div className={'my-2 flex items-center justify-between'}>
                    <div>
                        <p className={'text-xl capitalize font-semibold'}>{name}</p>
                        <p className={'text-sm'}>{location}</p>
                    </div>
                </div>

                <div className={'flex pb-4 gap-2'}>
                    {nearby.map(location => (
                        <div key={location}>
                            <p className={'text-xs rounded-full py-1 px-2 w-fit  border'}>{location}</p>
                        </div>
                    ))}
                </div>

                <div className={'my-4'}>
                    <p className={'text-sm mb-2'}>{description}</p>
                    <p className={'text-xs font-semibold'}>Rating: &nbsp; {rating}</p>
                </div>

                <div className={'flex pb-4 gap-2'}>
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