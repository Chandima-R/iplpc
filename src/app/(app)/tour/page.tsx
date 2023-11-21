import { PageHeader } from "@/components/shared/PageHeade";
import { TourCard } from "@/components/tour/TourCard";
import { tourPlans } from "@/components/tour/tourData";
import { Button } from "@/components/ui/button";

export default function Tours(){
    return (
        <div>
            <PageHeader title="tour plans" subtitle="Assign for a plan or Create your own tour plan here." />

            <div className="w-full mb-4 flex justify-end">
                <Button>Create Custom Plan</Button>
            </div>
            <div className={'grid grid-cols-4 gap-4'}>
                {tourPlans.map((tourPlan) => (
                    <div key={tourPlan?.id}>
                        <TourCard 
                            image={tourPlan?.imageURL}
                            name={tourPlan?.tourPlanName}
                            duration={tourPlan?.duration}
                            // itenerary={tourPlan?.itinerary}
                            description={tourPlan?.description}
                            accomadation={tourPlan?.accommodation}
                            map={tourPlan?.map}
                            contact={tourPlan?.contactInformation}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}