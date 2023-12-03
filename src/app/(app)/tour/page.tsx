import { PageHeader } from "@/components/shared/PageHeader";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {TourPlanCard} from "@/components/tour/TourPlanCard";

export default function Tours(){
    return (
        <div>
            <PageHeader title="tour plan" subtitle="Create your own tour plan here and see your all tour plans here." />
            <div className={'flex justify-end items-center w-full'}>
                <Link href={'/tour/add'}>
                    <Button>Add tour plan</Button>
                </Link>
            </div>

            <div className={'my-4'}>
                <h1 className={'text-lg'}>View all your tour plans here which were created by in the previous stages.</h1>

                <TourPlanCard />
            </div>
        </div>
    )
}