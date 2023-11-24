// components/MyLineChart.tsx
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

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

import { PageHeader } from '@/components/shared/PageHeade'
import Image from 'next/image'
import {TruncateString} from "@/lib/truncateString";
import {HotelSelectComboBox} from "@/components/locations/SelectHotelComboBox";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import Link from "next/link";
import {NearbyHotelCard} from "@/components/locations/NearbyHotelCard";


export default function Home() {
  return (
   <div>
      <PageHeader title="dashboard" subtitle="Every status of your work is in one place." />

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
   </div>
  )
}
