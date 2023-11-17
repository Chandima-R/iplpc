'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export default function Ticket(){
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return(
        <div className="w-full mx-auto max-w-[1440px] p-6">
            <p className="text-3xl font-bold tracking-wider capitalize mb-6">Edit your profile</p>

            <div>
                <form onSubmit={() => {}}>
                    <div className="">
                        <p className="text-lg font-semibold tracking-wide mb-2">Air Ticket Details</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-1">
                                <p className="capitalize text-sm">ticket number</p>
                                <Label className="sr-only" htmlFor="ticketNumber">
                                    ticket number
                                </Label>

                                <Input
                                    id="ticketNumber"
                                    placeholder="Ticket Number"
                                    type="text"
                                    autoCapitalize="none"
                                    autoComplete="text"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-1">
                                <p className="capitalize text-sm">flight number</p>
                                <Label className="sr-only" htmlFor="flightNumber">
                                    flight number
                                </Label>
                                <Input
                                    id="flightNumber"
                                    placeholder="Flight Number"
                                    type="text"
                                    autoCapitalize="none"
                                    autoComplete="text"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <p className="capitalize text-sm">Take off from</p>
                                <Label className="sr-only" htmlFor="takeOff">
                                    take off from
                                </Label>

                                <Input
                                    id="takeOff"
                                    placeholder="Toronto"
                                    type="text"
                                    autoCapitalize="none"
                                    autoComplete="text"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-1">
                                <p className="capitalize text-sm">start time</p>
                                <Label className="sr-only" htmlFor="startTime">
                                    start time
                                </Label>
                                <Input
                                    id="startTime"
                                    placeholder="Start Time"
                                    type="text"
                                    autoCapitalize="none"
                                    autoComplete="text"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <p className="capitalize text-sm">arrival time</p>
                                <Label className="sr-only" htmlFor="arrivalTime">
                                    arrival time
                                </Label>

                                <Input
                                    id="arrivalTime"
                                    placeholder="Arrival time"
                                    type="text"
                                    autoCapitalize="none"
                                    autoComplete="text"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-1">
                                <p className="capitalize text-sm">Airport</p>
                                <Label className="sr-only" htmlFor="airport">
                                    airport
                                </Label>
                                <Input
                                    id="airport"
                                    placeholder="Airport"
                                    type="text"
                                    autoCapitalize="none"
                                    autoComplete="text"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-end mt-10">
                        <Button className={'capitalize'}>Update ticket details</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}