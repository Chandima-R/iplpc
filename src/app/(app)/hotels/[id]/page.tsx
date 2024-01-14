'use client'

import { usePathname } from "next/navigation";
import { HotelCard } from "@/components/hotels/HotelCard";
import Link from "next/link";
import {TruncateString} from "@/lib/truncateString";
import {useState} from "react";
import Hotels from "../page";
import { hotelList } from "@/components/hotels/hotelData";
export default function ViewHotel(){
   
        const pathname = usePathname();
        const path = pathname.split('/')[2];
    
        const filteredData= hotelList?.filter((hotel) => hotel?.id === parseInt(path));
    
        const hotelData = filteredData[0];
    
        return(
            <div className={'flex items-start'}>
                <div className={'w-2/3 pr-2'}>
                    <h2 className={'text-3xl font-semibold mb-2 capitalize'}>{hotelData?.name}</h2>
                    <div className={'mb-2'}>
                        <img
                             src={hotelData?.image}
                            alt={hotelData?.name}
                            width={1920}
                            height={1080}
                            className={'w-full object-cover h-auto rounded'}
                        />
                    </div>
    
                    <div className={'my-4'}>
                        <p className={'text-sm mb-2'}>{TruncateString({str: hotelData?.description, maxLength:1000})}</p>
                        <p className={'text-xs font-semibold'}>Rating: &nbsp; {hotelData?.rating}</p>
                    </div>
    
                    <div className={'flex gap-2 items-center'}>
                        {hotelData?.amenities.map(amenities => (
                            <div key={amenities}>
                                <p className={'text-xs rounded-full py-1 px-2 w-fit  border'}>{amenities}</p>
                            </div>
                        ))}
                    </div>
                </div>
    
               
            </div>
        )
    }
