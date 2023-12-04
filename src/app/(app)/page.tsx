"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

import { PageHeader } from '@/components/shared/PageHeader'

import {CustomCalendar} from "@/components/shared/CustomCalendar";
import Clock from "@/components/shared/Clock";

export default function Home() {
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
            <div className={'w-3/5 border-l-2 border-r-2 px-2'}>center</div>
            <div className={'w-1/5 px-2 flex items-center justify-center'}>
                <Clock />
            </div>
        </div>

        {/* <div>
            <div className={'flex'}>
                <div className={'w-2/3 pr-2'}>
                    <div>
                        <Line
                            data={{
                                labels: [
                                    "2023-01",
                                    "2023-02",
                                    "2023-03",
                                    "2023-04",
                                    "2023-05",
                                    "2023-06",
                                    "2023-07",
                                ],
                                datasets: [
                                    {
                                        data: [100, 120, 115, 134, 168, 132, 200,],
                                        backgroundColor: "purple",
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
                <div className={'w-1/3 pl-2 border-l border-slate-900'}>
                    <h2 className={'text-2xl font-semibold capitalize mb-3'}>nearby hotels</h2>
                </div>
            </div>
        </div> */}
    </div>
    )
}
