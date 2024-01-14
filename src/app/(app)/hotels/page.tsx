import { HotelCard } from "@/components/hotels/HotelCard";
import { hotelList } from "@/components/hotels/hotelData";
import { PageHeader } from "@/components/shared/PageHeader";
import Link from "next/link";

export default function Hotels(){
    return(
        <div>
            
            <PageHeader title="hotels" subtitle="Check the places where you going to stay."  image={'/images/hotels.jpeg'}/>

            <div className={'grid grid-cols-4 gap-4'}>
                {hotelList?.map(hotel => (
                    <div key={hotel?.id}>
                        <HotelCard
                            image={hotel.image}
                            name={hotel.name}
                            location={hotel.location}
                            rating={hotel.rating}
                            nearby={hotel.nearbyLocations}
                            amenities={hotel.amenities}
                            description={hotel.description}
                        />
                    </div>
                )
                )}
            </div>
        </div>
    )
}