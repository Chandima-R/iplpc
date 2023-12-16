import Image from "next/image"
import { PageHeader } from "../shared/PageHeader"

export const StartTour = () => {
    return(
        <div>
            <div className="flex items-center flex-col">
                <PageHeader title="Welcome aboard" />
                <div className="mb-10">
                    <Image
                        src="/images/logo-blue.png"
                        alt="logo"
                        width={400}
                        height={200}
                        className="object-contain"
                        priority={true}
                    />
                </div>
            </div>
            <div>
                <h1>start your tour plan</h1>
                <p>description about</p>
            </div>
        </div>
    )
}