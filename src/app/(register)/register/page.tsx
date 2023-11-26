'use client'

import { CountrySelector } from "@/components/register/CountrySelector";
import { PassportSelector } from "@/components/register/PassportSelector";
import { PaymentSelector } from "@/components/register/PaymentSelector";
import { TicketSelector } from "@/components/register/TicketSelector";
import {useRef, useState} from "react";
import {RegisterData} from "@/components/types";
import {REGISTER_INITIAL_DATA} from "@/components/InitialData";
import {WizardFooter} from "@/components/shared/WizardFooter";
import { WizardHeader } from "@/components/shared/WizardHeader";

const steps = [
    'country',
    'passport',
    'payment',
    // 'finalize',
    'ticket'
]

export default function RegistrationPage(){
    const [currentStep, setCurrentStep] = useState<string>(steps[0]);
    const [formData, setFormData] = useState<RegisterData>(REGISTER_INITIAL_DATA);
    const refSubmitButton = useRef<HTMLButtonElement>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [isLoading] = useState<boolean>(false);
    const refFormSaveButton = useRef<HTMLButtonElement>(null);

    const renderStep = () => {
        switch(currentStep){
            case 'country':
                return(
                    <CountrySelector
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                    />
                )
            case 'passport':
                return(
                    <PassportSelector
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}
                    />
                )
            case 'payment':
                return(
                    <PaymentSelector
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}
                    />
                )
            case 'finalize':
                // return(
                //     <FinalizeScreen
                //         refSubmitButton={refSubmitButton}
                //     />
                // )

            case 'ticket':
                return(
                    <TicketSelector
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}
                    />
                )
            default:
                return null;
        }
      }

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
            <div className="relative bg-white w-full max-w-[600px] min-h-[600px] h-auto flex items-center justify-center p-2 z-30 shadow rounded flex-col">

                <div className={'h-8'}>
                    <WizardHeader
                        currentStep={currentStep}
                        steps={steps}
                    />
                </div>

                <div>
                    {renderStep()}
                </div>
                <WizardFooter
                    currentStep={currentStep}
                    steps={steps}
                    refSubmitButton={refSubmitButton}
                    isButtonDisabled={isButtonDisabled}
                    isLoading={isLoading}
                    refFormSaveButton={refFormSaveButton}
                />
            </div>
        </div>
    )
}