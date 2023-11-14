'use client'

import { Label } from "@radix-ui/react-label"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Icons } from "../shared/Icons"
import Link from "next/link"
import { Aperture } from "lucide-react"

export const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const randomImage = Math.floor(Math.random() * 10)

    const handleSubmit =  (data: any) => {
        console.log('submit', data)
    }

    return(
        <div className="relative h-screen w-full flex items-center justify-center">
            <Image
                src={`/images/session/session-image-${randomImage}.jpg`}
                alt="session-image-0"
                width={1920}
                height={1080}
                className="absolute top-0 left-0 right-0 bottom-0 object-cover h-screen z-0"
            />
            
            <div 
                className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-10"
            />
            <div>

            <form onSubmit={handleSubmit} className="z-20 absolute h-screen top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                <div className="grid gap-3 w-[600px] p-16 bg-white rounded shadow">
                    <div className="flex items-center justify-center w-full mb-10">
                        <Aperture className="w-16 h-16 mr-4" />
                        <h1 className="text-4xl font-bold text-center tracking-wider uppercase">
                            sign in
                        </h1>
                    </div>
                        <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="email">
                                Email
                            </Label>
                            <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            />
                        </div>

                        <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="password">
                            Password
                            </Label>
                            <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="password"
                            autoCorrect="off"
                            disabled={isLoading}
                            />
                        </div>

                        <Button disabled={isLoading} className="mt-4">
                            {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Sign In
                        </Button>

                        <div className="text-center text-sm w-full flex items-center justify-center px-10 mt-10">
                            <p className="w-auto">By clicking Sign In, you agree to our 
                            {' '}
                            <Link href={'/terms'} className="underline hover:text-blue-600">Terms of Service</Link>
                            {' '}
                            and 
                            {' '}
                            <Link href={'/policy'} className="underline hover:text-blue-600">Privacy Policy</Link>
                            .
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}