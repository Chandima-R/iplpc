'use client'

import {usePathname} from "next/navigation";
import {locations} from "@/components/locations/locationData";
import Image from "next/image";
import {NearbyHotelCard} from "@/components/locations/NearbyHotelCard";
import Link from "next/link";
import {TruncateString} from "@/lib/truncateString";
import {HotelSelectComboBox} from "@/components/locations/SelectHotelComboBox";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";

export default function ViewLocation(){
    const [dateFrom, setDateFrom] = useState<Date>()
    const [dateTo, setDateTo] = useState<Date>()

    const pathname = usePathname();
    const path = pathname.split('/')[2];

    const filteredData= locations?.filter((location) => location?.id === parseInt(path));

    const locationData = filteredData[0];

    return(
        <div className={'flex items-start'}>
            <div className={'w-2/3 pr-2'}>
                <h2 className={'text-3xl font-semibold mb-2 capitalize'}>{locationData?.name}</h2>
                <div className={'mb-2'}>
                    <Image
                         src={locationData?.image}
                        alt={locationData?.name}
                        width={1920}
                        height={1080}
                        className={'w-full object-cover h-auto rounded'}
                    />
                </div>

                <div className={'my-4'}>
                    <p className={'text-sm mb-2'}>{TruncateString({str: locationData?.description, maxLength:450})}</p>
                    <p className={'text-xs font-semibold'}>Rating: &nbsp; {locationData?.rating}</p>
                </div>

                <div className={'flex gap-2 items-center'}>
                    {locationData?.attractions.map(attraction => (
                        <div key={attraction}>
                            <p className={'text-xs rounded-full py-1 px-2 w-fit  border'}>{attraction}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h3 className={'text-2xl font-semibold mt-4'}>Create your tour plan</h3>
                </div>

                <form>
                    <div className={'grid grid-cols-2 gap-2 mt-4'}>
                        <div>
                            <p className={'text-sm mb-2'}>Select Hotel</p>
                            <HotelSelectComboBox hotels={locationData?.hotels} />
                        </div>
                        <div className={'grid grid-cols-2 gap-4 -ml-12'}>
                            <div className={'grid grid-cols-1'}>
                                <div>
                                    <p className={'text-sm mb-2'}>From</p>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] justify-start text-left font-normal",
                                                    !dateFrom && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {dateFrom ? format(dateFrom, "PPP") : <span>Pick start date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={dateFrom}
                                                onSelect={setDateFrom}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            <div className={'grid grid-cols-1'}>
                                <div>
                                    <p className={'text-sm mb-2'}>To</p>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] justify-start text-left font-normal",
                                                    !dateTo && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {dateTo ? format(dateTo, "PPP") : <span>Pick end date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={dateTo}
                                                onSelect={setDateTo}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full flex justify-end mt-4'}>
                        <Button className={'capitalize'}>Create tour plan</Button>
                    </div>
                </form>
            </div>

            <div className={'w-1/3 pl-2 border-l border-slate-900'}>
                <h2 className={'text-2xl font-semibold capitalize mb-3'}>nearby hotels</h2>
                <div>
                    {
                        locationData?.hotels?.map((hotel) => (
                            <Link key={hotel?.name} href={`/locations/${path}/hotel/${hotel.id}`} target={'_blank'}>
                                <NearbyHotelCard
                                    name={hotel?.name}
                                    image={hotel?.image}
                                    rating={hotel?.rating}
                                    price={1}
                                    facilities={hotel?.amenities}
                                    description={hotel?.description}
                                />
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}