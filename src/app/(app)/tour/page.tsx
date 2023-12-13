import { PageHeader } from "@/components/shared/PageHeader";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {TourPlanCard} from "@/components/tour/TourPlanCard";

export default function Tours(){
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

            <div className={'my-4'}>
                <TourPlanCard />
            </div>
        </div>
    )
}