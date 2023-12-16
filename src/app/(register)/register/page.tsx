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
import Image from "next/image";

const steps = [
    'country',
    'passport',
    'payment',
    'ticket',
]

export default function RegistrationPage(){
    const [currentStep, setCurrentStep] = useState<string>(steps[0]);
    const [formData, setFormData] = useState<RegisterData>(REGISTER_INITIAL_DATA);
    const refSubmitButton = useRef<HTMLButtonElement>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [isLoading] = useState<boolean>(false);
    const refFormSaveButton = useRef<HTMLButtonElement>(null);

    const randomImage = Math.floor(Math.random() * 10)

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
            // case 'welcome':
            //     return(
            //         <FinalizeScreen
            //             formData={formData}
            //             setFormData={setFormData}
            //             refSubmitButton={refSubmitButton}
            //             setIsButtonDisabled={setIsButtonDisabled}
            //             setCurrentStep={setCurrentStep}
            //             refFormSaveButton={refFormSaveButton}
            //         />
            //     )
            default:
                return null;
        }
    }

    return(
        <div className="relative h-screen w-full flex items-center justify-center p-4">
            <Image
                src={`/images/session/session-image-${randomImage}.jpg`}
                alt="session-image-0"
                width={1920}
                height={1080}
                className="absolute top-0 left-0 right-0 bottom-0 object-cover h-screen z-0"
            />
            
            <div 
                className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10"
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