import { RegisterHeader } from "./RegisterHeader"
import Image from "next/image"

export const FinalizeScreen = () => {
    return(
        <div className="flex items-center flex-col">
            <RegisterHeader title="finalize registration" />

            <div className="mb-4">
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={300}
                    height={200}
                    className="object-contain"
                    priority={true}
                    />
            </div>

            <div>
                <div className="p-2">
                    <p className="text-lg font-semibold">Note: </p>
                    <p className="text--base">You are at the last stages in the registration. If you want to finish the setup, just click next and ignore the ticket details. But if you have ticket details please update it on next screen. </p>

                </div>
            </div>
        </div>
    )
}