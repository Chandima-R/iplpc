import { HotelCard } from "@/components/hotels/HotelCard";
import { hotelList } from "@/components/hotels/hotelData";

export default function Hotels(){
    return(
        <div className='mx-auto max-w-[1440px] w-full p-6'>
            <div>
                <h1 className={'text-3xl font-bolds capitalize'}>hotels</h1>
                <p className={'text-base'}>Check the place where you going to stay</p>
            </div>
            <hr  className={'my-4'}/>
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