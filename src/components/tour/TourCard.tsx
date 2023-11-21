import { TruncateString } from "@/lib/truncateString";
import Image from "next/image"

interface TourCardProps {
    image: string;
    name: string;
    duration: number;
    description: string;
    itenerary?: Itenerary;
    accomadation: string;
    highlights?: string[];
    map: string;
    contact: string;
}

type Itenerary = {
    day: number;
    activities: string[];
    overnight: string;
}

export const TourCard  = ({image, name, duration, description, itenerary, accomadation, highlights, map, contact}: TourCardProps) => {
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

            <div className={'px-4'}>
                <div className={'my-2 flex items-center justify-between'}>
                    <p  className={'text-xl capitalize font-semibold'}>{name}</p>
                    <p className={'text-lg font-bold'}>{duration} <span className="text-sm font-normal">days</span></p>
                </div>

                <div className={'my-4 h-32'}>
                    <p className={'text-sm mb-2'}>{TruncateString({str: description, maxLength:135})}</p>
                    <p>itenerary</p>
                </div>

                <div className={'my-4'}>
                    <p>{accomadation}</p>
                    <p>highlights</p>
                </div>

                <div className={'my-4'}>
                    <p>{map}</p>
                </div>

                <div className={'my-4 text-sm'}>
                    <p>{contact}</p>
                </div>
           </div>
        </div>
    )
}