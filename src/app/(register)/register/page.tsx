'use client'

import { CountrySelector } from "@/components/register/CountrySelector";
import { FinalizeScreen } from "@/components/register/FinalizeScreen";
import { PassportSelector } from "@/components/register/PassportSelector";
import { Button } from "@/components/ui/button";
import { getCountryDataList} from 'countries-list';
import { useState } from "react";

const steps = [
    'country',
    'passport',
    'finalize'
]

export default function RegistrationPage(){
    const [currentStep, setCurrentStep] = useState<string>(steps[0]);

    const countries = getCountryDataList().map((country) => ({
        value: country.name,
        label: country.name,
      })).sort((a, b) => a.label.localeCompare(b.label));

      const renderStep = () => {
        switch(currentStep){
            case 'country':
                return(
                    <CountrySelector />
                )
            case 'passport':
                return(
                    <PassportSelector />
                )
            case 'finalize':
            return(
                <FinalizeScreen />
            )
            default:
                return null;
        }
      }

      const handleBack = () => {
        const currentIndex = steps.indexOf(currentStep);
        if (currentIndex > 0) {
          setCurrentStep(steps[currentIndex - 1]);
        }
      };
    
      const handleNext = () => {
        const currentIndex = steps.indexOf(currentStep);
        if (currentIndex < steps.length - 1) {
          setCurrentStep(steps[currentIndex + 1]);
        }
      };
      
    return(
        <div className="relative h-screen w-full flex items-center justify-center p-4">
            <div
                className="absolute top-10 left-10 h-[450px] w-[450px] rounded-full bg-orange-200 z-0"
            />

             <div
                className="absolute left-100 top-50 h-[450px] w-[450px] rounded-full bg-blue-200 z-0"
            />

             <div
                className="absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-pink-200 z-0"
            />

            <div 
                className="absolute top-0 left-0 right-0 bottom-0 z-30 backdrop-blur-[200px]"
            />
            <div className="relative bg-white w-full max-w-[600px] h-[600px] flex items-center justify-center p-2 z-30 shadow rounded flex-col">
                {renderStep()}
                <div className="flex items-center justify-between w-full absolute bottom-0 left-0 right-0 p-2">
                    <Button 
                        className="w-28 border" 
                        variant={'ghost'} 
                        onClick={handleBack}
                        disabled={currentStep === steps[0]}
                    >
                        Back
                    </Button>
                    <Button 
                        className="w-28" 
                        onClick={handleNext}
                    >
                        {currentStep === steps[steps.length - 1] ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    )
}