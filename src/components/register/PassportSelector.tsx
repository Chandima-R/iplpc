'use client'

import Image from "next/image"
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"
import { useState } from "react"
import { RegisterHeader } from "./RegisterHeader"

export const PassportSelector = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return(
        <div>
            <div className="flex items-center flex-col">
                <RegisterHeader title="passport details" />
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