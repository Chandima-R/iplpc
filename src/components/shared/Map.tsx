'use client'

import * as React from 'react';
import {APIProvider, Map, Marker, useMarkerRef} from "@vis.gl/react-google-maps";
import {useEffect} from "react";

interface MpaPageProps {
    latitude: number;
    longitude: number;
}
export const MapComponent = ({latitude, longitude}: MpaPageProps) => {
    const [markerRef, marker] = useMarkerRef();

    useEffect(() => {
        if (!marker) {
            return;
        }

        // do something with marker instance here
    }, [marker]);

    return(
        <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
        >
            <div className="relative">
                <Map
                    zoom={8}
                    center={{lat: latitude, lng: longitude}}
                    gestureHandling="greedy"
                    disableDefaultUI
                    className="h-[200px] rounded-md"
                >
                    <Marker ref={markerRef} position={{lat:  latitude, lng: longitude}} />
                </Map>
            </div>
        </APIProvider>
    )
}
