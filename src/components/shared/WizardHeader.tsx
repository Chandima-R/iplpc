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
            <Progress value={stepValue} className={'h-1 bg-white '}/>
            <div className={'flex items-center justify-center w-full'}>
                <h1 className={'pt-4 pl-4 text-2xl font-semibold capitalize'}>{currentStep}</h1>
            </div>
        </div>
    )
}