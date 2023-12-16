import {Button} from "@/components/ui/button";
import Link from "next/link";
import {TourPlanCard} from "@/components/tour/TourPlanCard";
import {MultipleMapLocation} from "@/components/shared/MultipleLocation";
import {tourPlanData} from "@/app/(app)/tour/tour-plan-data";

export default function Tours(){

    const locationData = tourPlanData?.filter(tour => tour.location)

    return (
        <div>
            <div className={'border-b-[1px] flex items-start justify-between pb-2'}>
                <div className={'w-full'}>
                    <h1 className={'text-3xl uppercase font-bold tracking-wider'}>tour plans</h1>
                    <h1 className={'text-base font-normal'}>Create your own tour plan here and see your all tour plans here.</h1>
                </div>
                <div className={'flex justify-end items-center w-auto'}>
                    <Link href={'/tour/add'}>
                        <Button className={'hover:bg-secondary text-white hover:text-primary transition-all ease-in-out duration-300'}>Add tour plan</Button>
                    </Link>
                </div>
            </div>

            <div className={'flex my-4'}>
                <div className={'w-7/12 grid grid-cols-3 gap-4'}>
                    {tourPlanData?.map(tour => {
                        return(
                            <TourPlanCard
                                key={tour.id}
                                id={tour.id}
                                location={tour.location}
                                tripDate={tour.tripDate}
                                category={tour.photographicCategory}
                                description={tour.description}
                                latitude={tour.latitude}
                                longitude={tour.longitude}
                             image={tour?.image}
                            />
                        )
                    })}
                </div>
                <div className={'w-5/12 border-l-2 border-r-2 px-2 h-auto'}>
                    <MultipleMapLocation locations={locationData} height={1000}/>
                </div>
            </div>
        </div>
    )
}