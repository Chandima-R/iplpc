'use client'

import { Aperture } from "lucide-react"
import Link from "next/link"
import { LogoutContainer } from "../mini-profile/LogoutContainer"
import Image from "next/image";

export const NavigationBar = () => {
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
                </div>
                <div className="flex items-center">
                    <LogoutContainer />
                </div>
            </div>
        </div>
    )
}