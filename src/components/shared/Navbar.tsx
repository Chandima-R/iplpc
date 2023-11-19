'use client'

import { Aperture } from "lucide-react"
import Link from "next/link"
import { LogoutContainer } from "../mini-profile/LogoutContainer"

export const Navbar = () => {
    return(
        <div className="bg-primary text-white shadow sticky top-0 left-0 right-0 z-20">
            <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 py-2">
                <div className="flex items-center ">
                    <Link href="/">
                        <Aperture 
                            className="w-12 h-12 mr-4"
                        />
                    </Link>
                    <Link href="/hotels" className={'mr-4'}>
                        <h1 className="text-sm">Hotels</h1>
                    </Link>
                    <Link href="/tour">
                        <h1 className="text-sm mr-4">Tour plan</h1>
                    </Link>
                    <Link href="/results">
                        <h1 className="text-sm">My Results</h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link href={'/profile'} className="text-sm mr-4">Edit Profile</Link>
                    <LogoutContainer />
                </div>
            </div>
        </div>
    )
}