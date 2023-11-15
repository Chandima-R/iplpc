import { Combobox } from "@/components/shared/Combobox";
import { Button } from "@/components/ui/button";
import { getCountryDataList} from 'countries-list';
import { Aperture } from "lucide-react";
import Image from "next/image";

export default function RegistrationPage(){

    const countries = getCountryDataList().map((country) => ({
        value: country.name,
        label: country.name,
      })).sort((a, b) => a.label.localeCompare(b.label));
      
    return(
        <div className="relative h-screen w-full flex items-center justify-center p-6">
            <div 
                className="absolute top-0 left-0 right-0 bottom-0 bg-wgite opacity-70 z-20"
            />
            <div className="bg-white w-[600px] h-[600px] flex items-center justify-center p-2 z-30 shadow rounded flex-col">
               <div className="flex items-center flex-col">
                    <div className="flex items-center mb-10">
                        <Aperture className="w-16 h-16 mr-4" />
                        <h1 className="text-4xl uppercase font-bold tracking-wider">Welcome aboard!</h1>
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
                <div className="mb-10">
                    <p className="text-base tracking-wide">Please select  your country to start your journey with us.</p>
                    <div>
                        <p>country selector</p>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full p-1">
                    <Button className="w-28" variant={'ghost'}>Back</Button>
                    <Button className="w-28">Next</Button>
                </div>
            </div>
        </div>
    )
}