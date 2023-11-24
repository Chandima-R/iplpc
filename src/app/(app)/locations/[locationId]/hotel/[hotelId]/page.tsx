'use client'

import {usePathname} from "next/navigation";

export default function ViewHotel(){
    const pathname = usePathname();

    return(
        <div>
            <h1>View Hotel</h1>
        </div>
    )
}