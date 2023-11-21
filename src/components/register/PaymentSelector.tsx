'use client'

import { useState } from "react"
import { Combobox } from "../shared/Combobox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RegisterHeader } from "./RegisterHeader"
import Image from "next/image"

export const PaymentSelector = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return(
        <div className="mb-4">
            <div className="flex flex-col">
                <RegisterHeader title="Add you payments" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="grid gap-1">
                    <p className="capitalize text-sm">email</p>
                    <Label className="sr-only" htmlFor="email">
                        email
                    </Label>
                    
                    <Input
                        id="email"
                        placeholder="Email"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                    />
                </div>

                <div className="grid grid-cols-4 gap-2 items-center">
                    <div className="rounded shadow w-20 h-auto cursor-pointer">
                        <Image 
                            src={'/images/payment/visa.png'}
                            alt="visa"
                            width={1920}
                            height={1080}
                            className="object-contain w-20"
                        />
                    </div>
                    <div className="rounded shadow w-20 h-auto cursor-pointer">
                        <Image 
                            src={'/images/payment/visa.png'}
                            alt="visa"
                            width={1920}
                            height={1080}
                            className="object-contain w-20"
                        />
                    </div>
                    <div className="rounded shadow w-20 h-auto cursor-pointer">
                        <Image 
                            src={'/images/payment/visa.png'}
                            alt="visa"
                            width={1920}
                            height={1080}
                            className="object-contain w-20"
                        />
                    </div>
                    <div className="rounded shadow w-20 h-auto cursor-pointer">
                        <Image 
                            src={'/images/payment/visa.png'}
                            alt="visa"
                            width={1920}
                            height={1080}
                            className="object-contain w-20"
                        />
                    </div>
                </div>

                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <p className="capitalize text-sm">card information</p>
                        <Label className="sr-only" htmlFor="cardInformation">
                            card information
                        </Label>
                        
                        <Input
                            id="cardInformation"
                            placeholder="Number"
                            type="text"
                            autoCapitalize="none"
                            autoComplete=""
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="grid gap-1 grid-cols-2">                     
                        <Input
                            id="cardInformation"
                            placeholder="MM / YY"
                            type="text"
                            autoCapitalize="none"
                            autoComplete=""
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                         <Input
                            id="cardInformation"
                            placeholder="CVC"
                            type="text"
                            autoCapitalize="none"
                            autoComplete=""
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <p className="capitalize text-sm">country or region</p>
                        <Label className="sr-only" htmlFor="country">
                            country or region
                        </Label>
                        
                        <Combobox />
                        
                    </div>

                    <div className="grid gap-1 grid-cols-1">                     
                        <Input
                            id="zipCode"
                            placeholder="Zip code"
                            type="text"
                            autoCapitalize="none"
                            autoComplete=""
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}