'use client'

import Link from "next/link"
import { MiniProfile } from "../mini-profile/MiniProfile"
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";

export const NavigationBar = () => {
    return(
        <div className="bg-primary/70 text-white shadow sticky top-0 left-0 right-0 z-20 rounded-br-full rounded-bl-full mx-1">
            <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 py-2">
                <div className="flex items-center uppercase tracking-wider text-sm">
                    <Link href="/">
                        <Image
                            src={'/images/logos/logo-gold.png'}
                            alt={'logo-gold'}
                            width={100}
                            height={100}
                            className={'cursor-pointer mr-4'}
                        />
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/panel/panel-locations" legacyBehavior passHref>
                                    <NavigationMenuLink className={'bg-transparent hover:text-secondary transition-all ease-in-out duration-300 mr-4'}>
                                        locations
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/panel/panel-award-categories" legacyBehavior passHref>
                                    <NavigationMenuLink className={'bg-transparent hover:text-secondary transition-all ease-in-out duration-300 mr-4'}>
                                        award categories
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex items-center">
                    <MiniProfile />
                </div>
            </div>
        </div>
    )
}