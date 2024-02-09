'use client'

import {usePathname} from "next/navigation";
import {locations} from "@/components/locations/locationData";
import {NearbyHotelCard} from "@/components/locations/NearbyHotelCard";
import Link from "next/link";
import {TruncateString} from "@/lib/truncateString";
import {useState} from "react";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function ViewLocation(){

    const pathname = usePathname();
    const path = pathname.split('/')[2];

    const filteredData= locations?.filter((location) => location?.id === parseInt(path));

    const locationData = filteredData[0];

    return(
        <div className={'flex items-start'}>
            <div className={'w-2/3 pr-2'}>
                <h2 className={'text-3xl font-semibold mb-2 capitalize'}>{locationData?.name}</h2>
                <div className={'mb-2'}>
                    <img
                         src={locationData?.image}
                        alt={locationData?.name}
                        width={1920}
                        height={1080}
                        className={'w-full object-cover h-auto rounded'}
                    />
                </div>

                <div className={'my-4'}>
                    <p className={'text-sm mb-2'}>{TruncateString({str: locationData?.description, maxLength:1000})}</p>
                    <p className={'text-xs font-semibold'}>Rating: &nbsp; {locationData?.rating}</p>
                </div>

                <div className={'flex gap-2 items-center'}>
                    {locationData?.attractions.map(attraction => (
                        <div key={attraction}>
                            <p className={'text-xs rounded-full py-1 px-2 w-fit  border'}>{attraction}</p>
                        </div>
                    ))}
                </div>
            </div>

           <div className={'flex flex-col w-1/3'}>
               <div className={'pl-2 border-l border-slate-900'}>
                   <h2 className={'text-2xl font-semibold capitalize mb-3'}>nearby locations</h2>
                   
 <Carousel>
  <CarouselContent>
    {locationData?.hotels?.map((location, index) => (
      <CarouselItem key={index}>
        <Link href={`/locations/${path}/location/${location.id}`} target={'_blank'}>
        </Link>
        <Link key={location?.name} href={`/locations/${path}/location/${location.id}`} target={'_blank'}>
          <NearbyHotelCard
            name={location?.name}
            image={location?.image}
            rating={location?.rating}
            price={1}
            facilities={location?.amenities}
            description={location?.description}
          />
        </Link>
      </CarouselItem>
    ))}
  </CarouselContent>
  <div className="flex justify-between items-center mt-4">
    <CarouselPrevious />
    <CarouselNext />
  </div>
</Carousel>

               </div>

               <div className={'pl-2 border-l border-slate-900'}>
                   <h2 className={'text-2xl font-semibold capitalize mb-3'}>nearby hotels</h2>
<Carousel>
  <CarouselContent>
    {locationData?.hotels?.map((hotel, index) => (
      <CarouselItem key={index}>
        <Link href={`/locations/${path}/hotel/${hotel.id}`} target={'_blank'}>
        </Link>
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
      </CarouselItem>
    ))}
  </CarouselContent>
  <div className="flex justify-between items-center mt-4">
    <CarouselPrevious />
    <CarouselNext />
  </div>
</Carousel>
               </div>
           </div>
        </div>
    )
}