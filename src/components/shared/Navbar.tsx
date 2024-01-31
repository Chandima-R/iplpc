'use client'

import Link from "next/link"
import { MiniProfile } from "../mini-profile/MiniProfile"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
    return(
        <div className="bg-primary text-white shadow sticky top-0 left-0 right-0 z-20 h-18 py-2 flex items-center">
            <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 py-2">
                <div className="flex items-center uppercase tracking-wider text-xs">
                    {/*<Link href="/">*/}
                    {/*    <Image*/}
                    {/*        src={'/images/logos/logo-gold.png'}*/}
                    {/*        alt={'logo-gold'}*/}
                    {/*        width={100}*/}
                    {/*        height={100}*/}
                    {/*        className={'cursor-pointer mr-4'}*/}
                    {/*    />*/}
                    {/*</Link>*/}
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/hotels" legacyBehavior passHref>
                                    <NavigationMenuLink className={'bg-transparent hover:text-secondary transition-all ease-in-out duration-300 mr-4'}>
                                        hotels
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/locations" legacyBehavior passHref>
                                    <NavigationMenuLink className={'bg-transparent hover:text-secondary transition-all ease-in-out duration-300 mr-4'}>
                                        locations
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/award-categories" legacyBehavior passHref>
                                    <NavigationMenuLink className={'bg-transparent hover:text-secondary transition-all ease-in-out duration-300 mr-4'}>
                                        award category
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/tour" legacyBehavior passHref>
                                    <NavigationMenuLink className={'bg-transparent hover:text-secondary transition-all ease-in-out duration-300 mr-4'}>
                                        tour plan
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/results" legacyBehavior passHref>
                                    <NavigationMenuLink className={'bg-transparent hover:text-secondary transition-all ease-in-out duration-300 mr-4'}>
                                        submissions
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/results" legacyBehavior passHref>
                                    <NavigationMenuLink className={'bg-transparent hover:text-secondary transition-all ease-in-out duration-300 mr-4'}>
                                        results
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