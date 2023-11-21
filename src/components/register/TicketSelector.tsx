'use client'

import { useState } from "react"
import { Combobox } from "../shared/Combobox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RegisterHeader } from "./RegisterHeader"
import Image from "next/image"

export const TicketSelector = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return(
        <div className="mb-14 mt-4">
            <div className="flex flex-col">
                <RegisterHeader title="Add ticket details" />
            </div>

            <form onSubmit={() => {}}>
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
                </form>
        </div>
    )
}