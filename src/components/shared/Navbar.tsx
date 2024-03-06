'use client'

import Link from "next/link"
import { MiniProfile } from "../mini-profile/MiniProfile"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {usePathname} from "next/navigation";

export const Navbar = () => {
    const router = usePathname()
    const tab = router.split('/')[1]

    const getLinkClass = (linkTab: string) => {
        return tab === linkTab ? 'text-secondary font-bold' : 'hover:text-secondary';
    };
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
                                    <NavigationMenuLink className={`transition-all ease-in-out duration-300 mr-4 ${getLinkClass('hotels')}`}>
                                        hotels
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/locations" legacyBehavior passHref>
                                    <NavigationMenuLink className={`transition-all ease-in-out duration-300 mr-4 ${getLinkClass('locations')}`}>
                                        locations
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/award-categories" legacyBehavior passHref>
                                    <NavigationMenuLink className={`transition-all ease-in-out duration-300 mr-4 ${getLinkClass('award-categories')}`}>
                                        award category
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/tour" legacyBehavior passHref>
                                    <NavigationMenuLink className={`transition-all ease-in-out duration-300 mr-4 ${getLinkClass('tour')}`}>
                                        tour plan
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/submissions" legacyBehavior passHref>
                                    <NavigationMenuLink className={`transition-all ease-in-out duration-300 mr-4 ${getLinkClass('submissions')}`}>
                                        submissions
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/results" legacyBehavior passHref>
                                    <NavigationMenuLink className={`transition-all ease-in-out duration-300 mr-4 ${getLinkClass('results')}`}>
                                        results
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/support" legacyBehavior passHref>
                                    <NavigationMenuLink className={`transition-all ease-in-out duration-300 mr-4 ${getLinkClass('support')}`}>
                                        support
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