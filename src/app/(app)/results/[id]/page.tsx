'use client'

import { results } from "@/components/results/results";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function ViewResult(){
    const pathname = usePathname();

    const filteredData = results?.filter((result) => result?.resultId === parseInt(pathname?.split("/")[2]))

    return(
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-3xl font-semibold capitalize">{filteredData[0]?.userName}</p>
                    <p className="text-base font-semibold capitalize">User Id: {filteredData[0]?.userId}</p>
                </div>
                <div className="flex items-center rounded-full border px-6 py-2 bg-black text-white">
                    <p className="text-4xl font-bold">85.23 &nbsp;</p>
                    <p className="text-lg font-semibold"> / 100</p>
                </div>3
            </div>

            <hr className="my-6"/>
               
            <p className="text-xl font-semibold capitalize mb-2">Uploaded Photos</p>
            
            <div className="grid grid-cols-2">
                <div>
                    <Image
                        src={filteredData[0]?.image}
                        alt="uploaded image"
                        width={1920}
                        height={1080}
                        className="rounded max-w-[600px] w-full object-cover"
                    />
                    <div className="flex items-center">
                        <p className="text-3xl font-bold">{filteredData[0]?.score}</p>
                        <p className="text-base font-semibold"> /100</p>
                    </div>
                </div>
                <div>
                    <Image
                        src={filteredData[0]?.image}
                        alt="uploaded image"
                        width={1920}
                        height={1080}
                        className="rounded max-w-[600px] w-full object-cover"
                    />
                    <div className="flex items-center">
                        <p className="text-3xl font-bold">{filteredData[0]?.score}</p>
                        <p className="text-base font-semibold"> /100</p>
                    </div>
                </div>
            </div>
        </div>
    )
}