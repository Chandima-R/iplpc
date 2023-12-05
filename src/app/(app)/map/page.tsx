'use client'

import * as React from 'react';
import {APIProvider, Map, Marker, useMarkerRef} from "@vis.gl/react-google-maps";
import {useEffect} from "react";

export default function MapPage(){
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
                    center={{lat: 6.9271, lng: 79.8612}}
                    gestureHandling="greedy"
                    disableDefaultUI
                    className="h-[400px] rounded-md"
                >
                    <Marker ref={markerRef} position={{lat:  6.9271, lng: 79.8612}} />
                </Map>
            </div>
        </APIProvider>
    )
}
