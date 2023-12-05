'use client'

import {useRef, useState} from "react";
import { TourData} from "@/components/types";
import {WizardFooter} from "@/components/shared/WizardFooter";
import { WizardHeader } from "@/components/shared/WizardHeader";
import { Day01 } from "@/components/tour/Day01";
import { Day02 } from "@/components/tour/Day02";
import {Day16} from "@/components/tour/Day16";
import {Day03} from "@/components/tour/Day03";
import {Day04} from "@/components/tour/Day04";
import {Day05} from "@/components/tour/Day05";
import {Day06} from "@/components/tour/Day06";
import {Day07} from "@/components/tour/Day07";
import {Day08} from "@/components/tour/Day08";
import {Day09} from "@/components/tour/Day09";
import {Day10} from "@/components/tour/Day10";
import {Day11} from "@/components/tour/Day11";
import {Day12} from "@/components/tour/Day12";
import {Day13} from "@/components/tour/Day13";
import {Day14} from "@/components/tour/Day14";
import {Day15} from "@/components/tour/Day15";
import {Day17} from "@/components/tour/Day17";
import {Day18} from "@/components/tour/Day18";
import {Day19} from "@/components/tour/Day19";
import {Day20} from "@/components/tour/Day20";
import {TOUR_PLAN_INITIAL_DATA} from "@/components/InitialData";
import MapPage from "@/app/(app)/map/page";
import {MultipleMapLocation} from "@/components/shared/MultipleLocation";
import {locations} from "@/components/locations/locationData";

const steps = [
    'day01',
    'day02',
    'day03',
    'day04',
    'day05',
    'day06',
    'day07',
    'day08',
    'day09',
    'day10',
    'day11',
    'day12',
    'day13',
    'day14',
    'day15',
    'day16',
    'day17',
    'day18',
    'day19',
    'day20',
]

export default function AddTourPlan(){
    const [currentStep, setCurrentStep] = useState<string>(steps[0]);
    const [formData, setFormData] = useState<TourData>(TOUR_PLAN_INITIAL_DATA);
    const refSubmitButton = useRef<HTMLButtonElement>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
    const [isLoading] = useState<boolean>(false);
    const refFormSaveButton = useRef<HTMLButtonElement>(null);

    const renderStep = () => {
        switch(currentStep){
            case 'day01':
                return(
                    <Day01
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                         refFormSaveButton={refFormSaveButton}/>
                )
            case 'day02':
                return(
                    <Day02
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day03':
                return(
                    <Day03
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day04':
                return(
                    <Day04
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day05':
                return(
                    <Day05
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day06':
                return(
                    <Day06
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day07':
                return(
                    <Day07
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day08':
                return(
                    <Day08
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day09':
                return(
                    <Day09
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day10':
                return(
                    <Day10
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day11':
                return(
                    <Day11
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day12':
                return(
                    <Day12
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day13':
                return(
                    <Day13
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day14':
                return(
                    <Day14
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day15':
                return(
                    <Day15
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day16':
                return(
                    <Day16
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day17':
                return(
                    <Day17
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day18':
                return(
                    <Day18
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day19':
                return(
                    <Day19
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            case 'day20':
                return(
                    <Day20
                        formData={formData}
                        setFormData={setFormData}
                        refSubmitButton={refSubmitButton}
                        setIsButtonDisabled={setIsButtonDisabled}
                        setCurrentStep={setCurrentStep}
                        refFormSaveButton={refFormSaveButton}/>
                )
            default:
                return null;
        }
    }

    return(
        <div className="flex w-full items-center justify-between">
            <div className="relative  w-full max-w-[600px] min-h-[600px] h-auto flex items-center justify-center p-2 rounded flex-col bg-white shadow">

                <div className={'h-8'}>
                    <WizardHeader
                        currentStep={currentStep}
                        steps={steps}
                    />
                </div>

                <div >
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

            <div className={'w-1/2 min-h-[600px] h-auto p-2 shadow rounded bg-white'}>
                <MultipleMapLocation locations={[]} height={500}/>
            </div>
        </div>
    )
}