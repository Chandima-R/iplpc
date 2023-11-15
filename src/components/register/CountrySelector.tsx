import Image from "next/image"
import { Aperture } from "lucide-react"
import { Combobox } from "../shared/Combobox"

export const CountrySelector = () => {
    return(
        <div>
            <div className="flex items-center flex-col">
                <div className="flex items-center mb-10">
                    <Aperture className="w-16 h-16 mr-4" />
                    <h1 className="text-3xl md:text-4xl uppercase font-bold tracking-wider">Welcome aboard!</h1>
                </div>
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
            <div className="mb-10 px-2">
                <div>
                    <Combobox />
                </div>
            </div>
        </div>
    )
}