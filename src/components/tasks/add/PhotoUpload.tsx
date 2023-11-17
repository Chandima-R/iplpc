'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export const PhotoUpload = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    var currentDate = new Date();

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var meridiem = (hours >= 12) ? 'PM' : 'AM';

    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours === 0) ? 12 : hours;

    day = (day < 10) ? Number('0' + day) : day;
    month = (month < 10) ? Number('0' + month) : month;
    hours = (hours < 10) ? Number('0' + hours) : hours;
    minutes = (minutes < 10) ? Number('0' + minutes) : Number(minutes);
    seconds = (seconds < 10) ? Number('0' + seconds) : seconds;
    seconds = (seconds < 10) ? Number('0' + seconds) : seconds;
    
    var formattedDate = day + '-' + month + '-' + year;
    var formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

    return(
        <div className="w-full h-full text-center p-4">
            <h1 className="text-3xl capitalize font-bold mt-4">Upload your photo</h1>

            <div className="px-4 mt-10">
                <div className="flex items-center mb-2">
                    <p className="capitalize text-base font-semibold">Date:</p>
                    <p className="ml-4 text-base">{formattedDate}</p>
                </div>

                <div className="flex items-center mb-2">
                    <p className="capitalize text-base font-semibold">Time:</p>
                    <p className="ml-4 text-base">{formattedTime}</p>
                </div>

                <div className="flex items-center mb-2">
                    <p className="capitalize text-base font-semibold">user ID:</p>
                    <p className="ml-4 text-base">user id</p>
                </div>

                <div className="flex items-center mb-2">
                    <p className="capitalize text-base font-semibold">task ID:</p>
                    <p className="ml-4 text-base">user id</p>
                </div>

                <div className="flex items-center mb-2">
                    <p className="capitalize text-base font-semibold">category ID:</p>
                    <p className="ml-4 text-base">user id</p>
                </div>

                <div className="text-left">
                    <div className="grid gap-1">
                        <p className="capitalize text-sm">Upload photo</p>

                        <Label className="sr-only" htmlFor="passport Number">
                            Passport Number
                        </Label>
                        <Input
                            id="email"
                            placeholder="Upload photo"
                            type="text"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}