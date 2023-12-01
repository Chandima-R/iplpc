import {Progress} from "@/components/ui/progress";

interface WizardHeaderProps {
    currentStep: string;
    steps: string[];
}
export const WizardHeader = ({ currentStep, steps}:WizardHeaderProps) => {

    const currentStepIndex = steps.indexOf(currentStep);
    const stepValue = currentStepIndex / steps?.length * 100;

    return(
        <div className={'absolute top-0 left-0 right-0 w-full h-4'}>
            <Progress value={stepValue} className={'h-1'}/>
        </div>
    )
}