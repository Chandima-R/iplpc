'use client'

import Image from "next/image"
import { Aperture, Link } from "lucide-react"
import { Label } from "@radix-ui/react-label"
import { Icons } from "../shared/Icons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useState } from "react"

export const PassportSelector = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return(
        <div>
            <div className="flex items-center flex-col">
                <div className="flex items-center mb-10">
                    <Aperture className="w-16 h-16 mr-4" />
                    <h1 className="text-3xl md:text-4xl uppercase font-bold tracking-wider">Passport screen!</h1>
                </div>
                <div className="mb-10">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={400}
                        height={200}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="mb-10">
                <form onSubmit={() => {}}>
                    <div>
                        <div className="grid gap-1">
                        <p className="capitalize text-sm">passport number</p>
                            <Label className="sr-only" htmlFor="passport Number">
                                Passport Number
                            </Label>
                            <Input
                            id="email"
                            placeholder="Passport Number"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}