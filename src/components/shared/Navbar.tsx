'use client'

import { Aperture } from "lucide-react"
import Link from "next/link"
import { LogoutContainer } from "../mini-profile/LogoutContainer"
import Image from "next/image";

export const Navbar = () => {
    return(
        <div className="bg-primary text-white shadow sticky top-0 left-0 right-0 z-20">
            <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 py-2">
                <div className="flex items-center ">
                    <Link href="/">
                        {/*<Aperture */}
                        {/*    className="w-12 h-12 mr-4"*/}
                        {/*/>*/}
                        <Image
                            src={'/images/logo.png'}
                            alt={'logo'}
                            width={600}
                            height={600}
                            className={'w-24 h-auto'}
                        />
                    </Link>
                    <Link href="/hotels" className={'mr-4 hover:text-destructive transition-all ease-in-out duration-300'}>
                        <h1 className="text-sm">Hotels</h1>
                    </Link>
                    <Link href="/tour" className={'mr-4 hover:text-destructive transition-all ease-in-out duration-300'}>
                        <h1 className="text-sm">Tour plan</h1>
                    </Link>
                    <Link href="/locations" className={'mr-4 hover:text-destructive transition-all ease-in-out duration-300'}>
                        <h1 className="text-sm">Locations</h1>
                    </Link>
                    <Link href="/results" className={'mr-4 hover:text-destructive transition-all ease-in-out duration-300'}>
                        <h1 className="text-sm">My Results</h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link href={'/profile'} className="text-sm mr-4 hover:text-destructive transition-all ease-in-out duration-300">Edit Profile</Link>
                    <LogoutContainer />
                </div>
            </div>
        </div>
    )
}