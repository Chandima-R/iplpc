'use client';

import React, { useEffect, useState } from 'react';
import { APIProvider, Map, Marker, useMarkerRef } from "@vis.gl/react-google-maps";
import Image from "next/image";
import { TruncateString } from '@/lib/truncateString';

interface MapPageProps {
    locations?: { latitude: number; longitude: number; description: string, image: string, name: string, day: string }[];
    height: number;
}

export const MultipleMapLocation = ({ locations, height }: MapPageProps) => {
    const [, marker] = useMarkerRef();
    const [selectedLocation, setSelectedLocation] = useState<{ latitude: number; longitude: number; description: string, name: string, day: string, image: string} | null>(null);

    useEffect(() => {
        if (marker) {
            // do something with marker instance here
        }
    }, [marker]);

    const handleMarkerClick = (location: { latitude: number; longitude: number; description: string, name: string, day: string, image: string }) => {
        setSelectedLocation(location);
    };

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
            <div className="relative">
                <Map
                    zoom={8}
                    center={locations.length > 0 ? { lat: locations[0].latitude, lng: locations[0].longitude } : { lat: 0, lng: 0 }}
                    gestureHandling="greedy"
                    disableDefaultUI
                    className={`h-[${height}px] rounded-md relative`}
                >
                    {locations.map((location, index) => (
                        <Marker
                            key={index}
                            position={{ lat: location.latitude, lng: location.longitude }}
                            onClick={() => handleMarkerClick(location)}
                            className="cursor-pointer absolute"
                        
                        />
                    ))}

                </Map>
                {selectedLocation && (
                    <div 
                        className="popup bg-gray-100 rounded p-2 shadow w-52"
                    >
                        <div>
                            <Image
                                src={selectedLocation?.image || ''}
                                alt="location"
                                width={200}
                                height={200}
                                className='rounded object-cover w-full h-24'
                            />
                        </div>
                        <div className='my-2'>
                            <p className='text-lg capitalize font-semibold'>{selectedLocation?.day}</p>
                            <p className='text-sm capitalize font-semibold'>{selectedLocation?.name}</p>
                            <p className='text-xs'>{TruncateString({str: selectedLocation?.description, maxLength:100})}</p>
                        </div>
                    </div>
                )}
            </div>
        </APIProvider>
    );
};

