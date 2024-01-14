import { LocationCard } from "@/components/locations/LocationCard";
import { locations } from "@/components/locations/locationData";
import { PageHeader } from "@/components/shared/PageHeader";
import Link from "next/link";

export  default function LocationsPage(){
    return(
        <div className={'flex flex-col justify-start items-start'}>
            <PageHeader title="locations" subtitle="Select you location to create your tour plan." image={'/images/location.jpeg'}/>

            <div className={'grid grid-cols-4 gap-4'}>
                {locations?.map((location) => {
                        return(
                           <Link href={`/locations/${location?.id}`} key={location?.id}>
                               <LocationCard
                                   image={location?.image}
                                   name={location?.name}
                                   location={location?.name}
                                   rating={location?.rating}
                                   hotels={location?.hotels}
                                   description={location?.description}
                                   attractions={location?.attractions}
                               />
                           </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}