import {TruncateString} from "@/lib/truncateString";

interface TourPlanCardProps {
    id: number;
    location: string;
    tripDate: string;
    category: string;
    description: string;
    image: string;
    latitude?: number;
    longitude?: number;
}
export const TourPlanCard = ({
    location,
    tripDate,
    category,
    description,
    image,
}: TourPlanCardProps) => {
    return(
        <div className='rounded shadow max-w-[300px] w-full group cursor-pointer hover:shadow transition-all ease-in-out duration-300 overflow-hidden'>
            <div>
                <img
                    src={image}
                    width={1920}
                    height={1080}
                    alt="Placeholder"
                    className="rounded object-cover h-56 group-hover:scale-105 transition-all duration-500 ease-in-out "
                />
            </div>
            <div className={'px-4 h-[200px]'}>
                <div className={'my-2 flex items-center justify-between'}>
                    <div>
                        <p className={'text-lg capitalize font-semibold'}>date: {tripDate}</p>
                        <p className={'text-sm capitalize'}>Location: {location}</p>
                    </div>
                </div>

                <div className={'my-2 flex items-center justify-between'}>
                    <div>
                        <p className={'text-sm capitalize font-semibold'}>{category}</p>
                        <p className={'text-xs'}>{TruncateString({str: description, maxLength:250})}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}