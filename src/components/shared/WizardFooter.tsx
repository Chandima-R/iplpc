import {Button} from "@/components/ui/button";
import {RefObject} from "react";

interface WizardFooterProps {
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    isButtonDisabled: boolean;
    isLoading: boolean;
    currentStep: string;
    steps: string[];
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}
export const WizardFooter = ({refSubmitButton, isButtonDisabled, steps, currentStep, isLoading, refFormSaveButton}:WizardFooterProps) => {

    const currentStepIndex = steps.indexOf(currentStep);
    const lastStepIndex = steps.length - 1;

    return(
        <div className="flex items-center justify-between w-full absolute bottom-0 left-0 right-0 p-2">
            <Button
                disabled={isLoading}
                className="w-28 border"
                variant={'ghost'}
                onClick={() => refFormSaveButton?.current?.click()}
            >
                Back
            </Button>
            <Button
                disabled={isLoading || isButtonDisabled}
                className="w-28"
                onClick={() => refSubmitButton?.current?.click()}
            >
                {currentStepIndex === lastStepIndex ? 'Finish' : 'Next'}
            </Button>
        </div>
    )
}