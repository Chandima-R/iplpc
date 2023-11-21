import Image from "next/image"
import { Combobox } from "../shared/Combobox"
import { RegisterHeader } from "./RegisterHeader"

export const CountrySelector = () => {
    return(
        <div>
            <div className="flex items-center flex-col">
                <RegisterHeader title="Welcome aboard" />
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