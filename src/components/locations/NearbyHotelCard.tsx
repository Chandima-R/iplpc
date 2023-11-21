'use client'

import Image from "next/image";
import {TruncateString} from "@/lib/truncateString";

interface NearbyHotelCardProps{
    name: string;
    image: string;
    rating: number;
    price: number;
    description: string;
    facilities: string[];
}
export const NearbyHotelCard = ({name, image, rating, price, facilities, description}: NearbyHotelCardProps) => {
    return(
        <div className={'rounded shadow pb-2 mb-4'}>
            <div className='w-full h-56 overflow-hidden'>
                <Image
                    src={image}
                    width={1920}
                    height={1080}
                    alt="Placeholder"
                    className="rounded object-cover h-56 group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>
            <div className={'px-4 mb-4'}>
                <div className={'my-2 flex items-center justify-between'}>
                    <div>
                        <p className={'text-xl capitalize font-semibold'}>{name}</p>
                    </div>
                </div>

                <div className={'my-4'}>
                    <p className={'text-sm mb-2'}>{TruncateString({str: description, maxLength:220})}</p>
                    {/*<p className={'text-xs font-semibold'}>Rating: &nbsp; {rating}</p>*/}
                </div>

                <div className={'flex gap-2 items-center'}>
                    {facilities.map(facility => (
                        <div key={facility}>
                            <p className={'text-xs rounded-full py-1 px-2 w-fit  border'}>{facility}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}