'use client'

import { PhotoUpload } from "@/components/tasks/add/PhotoUpload";
import { SelectCategory } from "@/components/tasks/add/SelectCategory";
import { SelectTask } from "@/components/tasks/add/SelectTask";
import {useRef, useState} from "react";
import {WizardHeader} from "@/components/shared/WizardHeader";
import {WizardFooter} from "@/components/shared/WizardFooter";
import {TaskData} from "@/components/types";
import {TASK_INITIAL_DATA} from "@/components/InitialData";

const steps = [
    'task',
    'category',
    'upload'
]

export default function AddTask(){

    const [currentStep, setCurrentStep] = useState<string>(steps[0]);
    const [formData, setFormData] = useState<TaskData>(TASK_INITIAL_DATA);
    const refSubmitButton = useRef<HTMLButtonElement>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [isLoading] = useState<boolean>(false);
    const refFormSaveButton = useRef<HTMLButtonElement>(null);

    const renderStep = () => {
        switch(currentStep){
            case 'task':
                return(
                    <SelectTask
                        formData={formData}
                        refSubmitButton={refSubmitButton}
                        setCurrentStep={setCurrentStep}
                        setFormData={setFormData}
                        setIsButtonDisabled={setIsButtonDisabled}
                    />
                )
            case 'category':
                return(
                    <SelectCategory
                        formData={formData}
                        refSubmitButton={refSubmitButton}
                        setCurrentStep={setCurrentStep}
                        setFormData={setFormData}
                        setIsButtonDisabled={setIsButtonDisabled}
                        refFormSaveButton={refFormSaveButton}
                    />
                )
            case 'upload':
            return(
                <PhotoUpload
                    formData={formData}
                    refSubmitButton={refSubmitButton}
                    setCurrentStep={setCurrentStep}
                    setFormData={setFormData}
                    setIsButtonDisabled={setIsButtonDisabled}
                    refFormSaveButton={refFormSaveButton}
                />
            )
            default:
                return null;
        }
    }

    return(
        <div className="w-full flex items-center justify-center py-4 px-4">
            <div className="h-auto w-full max-w-[1000px]">
                <div className={''}>
                    <WizardHeader
                        currentStep={currentStep}
                        steps={steps}
                    />
                </div>

                <div>
                    {renderStep()}
                </div>

                <div className={'mt-10'}>
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
        </div>
    )
}