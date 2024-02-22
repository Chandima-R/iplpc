"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

import {CustomCalendar} from "@/components/shared/CustomCalendar";
import Clock from "@/components/shared/Clock";
import { MultipleMapLocation } from "@/components/shared/MultipleLocation";
import {tourPlanData} from "@/app/(app)/tour/tour-plan-data";
import {AlertCircle, CalendarIcon, CheckSquare } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
    const locationData = tourPlanData?.filter(tour => tour.location)

    const handleDayClick = (day: Date) => {
        console.log(222, day)
    }
    return (
        <div className={''}>
            <div className={'mb-4'}>
                <h1 className={'text-3xl font-semibold'}>Dashboard</h1>
                <p className={'text-semibold'}>View your every details here.</p>
            </div>
            <div className={'flex w-full items-start'}>
                <div className={'w-1/5 px-2 h-screen'}>
                    <CustomCalendar onDayClick={handleDayClick}/>
                    <div className={'my-2 border-t border-dashed pt-4'}>
                        <div className={'flex items-center mb-2'}>
                            <div className={'w-5 h-5 rounded-full bg-green-300 mr-4'} />
                            <p className={'text-sm'}>Task is completed.</p>
                        </div>
                        <div className={'flex items-center mb-2'}>
                            <div className={'w-5 h-5 rounded-full bg-gray-300 mr-4'} />
                            <p className={'text-sm'}>Task is not completed.</p>
                        </div>
                        <div className={'flex items-center mb-2'}>
                            <div className={'w-5 h-5 rounded-full bg-red-300 mr-4'} />
                            <p className={'text-sm'}>Task is suspended.</p>
                        </div>
                    </div>
                </div>
                <div className={'w-3/5 border-l-2 border-r-2 px-2 h-80'}>
                    <MultipleMapLocation locations={locationData} height={400}/>
                </div>
                <div className={'w-1/5 px-2 flex flex-col items-center justify-center pl-10'}>
                    <Clock />

                    <div className={'w-full flex items-center justify-end mt-8'}>
                        <Button>
                            <Link href={'/task/add'}>Add Tour Plan</Link>
                        </Button>
                    </div>

                    <div className={'mt-8 flex flex-col justify-end items-end w-full text-end'}>
                      

                        <HoverCard>
                            <HoverCardTrigger asChild>
                            
                            <div className={'bg-green-100 text-md uppercase font-bold group p-4 border-b-[1px] w-full flex items-center cursor-pointer'}>
                            <p>Registration</p>
                            <CheckSquare  className={'text-green-600 ml-4'}/>
                        </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80 bg-green-50">
                                <div className="flex justify-between space-x-4">
                                <div className="space-y-1">
                                    <p className="text-md">
                                    You have successfully regiesterd to start the competition.
                                    </p>
                                </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                                <HoverCardTrigger asChild>
                            
                        <div className={'bg-red-100 text-md uppercase font-bold group p-4 border-b-[1px] w-full flex items-center cursor-pointer'}>
                            <p>Ticket details</p>
                            <AlertCircle className={'text-red-600 ml-4'} />
                        </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80 bg-red-50">
                                <div className="flex justify-between space-x-4">
                                <div className="space-y-1">
                                    <p className="text-md">
                                    You need to complete your ticket details before you start the competition.
                                    </p>
                                </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        <HoverCard>
                            <HoverCardTrigger asChild>
                            <div className={'bg-red-100 text-md uppercase font-bold group p-4 border-b-[1px] w-full flex items-center cursor-pointer'}>
                            <p>tour plan 2/20</p>
                            <AlertCircle className={'text-red-600 ml-4'} />
                        </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80 bg-red-50">
                                <div className="flex justify-between space-x-4">
                                <div className="space-y-1">
                                    <p className="text-md">
                                    There are remaining 18 tasks to create before you start the competition.
                                    </p>
                                </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>

                        {/*<div className={'text-md uppercase font-bold group p-4 border-b-[1px] w-full'}>*/}
                        {/*    <Link*/}
                        {/*        href={'/tour'}*/}
                        {/*        className={''}*/}
                        {/*    >tour plan</Link>*/}
                        {/*</div>*/}

                        {/*<div className={'text-md uppercase font-bold group p-4 border-b-[1px] w-full'}>*/}
                        {/*    <Link*/}
                        {/*        href={'/results'}*/}
                        {/*        className={''}*/}
                        {/*    >results</Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            {/*<div>*/}
            {/*    <div className={'flex'}>*/}
            {/*        <div className={'w-2/3 pr-2'}>*/}
            {/*            <div>*/}
            {/*                <Line*/}
            {/*                    data={{*/}
            {/*                        labels: [*/}
            {/*                            "2023-01",*/}
            {/*                            "2023-02",*/}
            {/*                            "2023-03",*/}
            {/*                            "2023-04",*/}
            {/*                            "2023-05",*/}
            {/*                            "2023-06",*/}
            {/*                            "2023-07",*/}
            {/*                        ],*/}
            {/*                        datasets: [*/}
            {/*                            {*/}
            {/*                                data: [100, 120, 115, 134, 168, 132, 200,],*/}
            {/*                                backgroundColor: "purple",*/}
            {/*                            },*/}
            {/*                        ],*/}
            {/*                    }}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={'w-1/3 pl-2 border-l border-slate-900'}>*/}
            {/*            <h2 className={'text-2xl font-semibold capitalize mb-3'}>nearby hotels</h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
