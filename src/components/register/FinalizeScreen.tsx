'use client'

import {RegisterData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction, useEffect, useRef} from "react";

interface FinalizeScreenProps{
    formData: RegisterData;
    setFormData: Dispatch<SetStateAction<RegisterData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}
export const FinalizeScreen = ({
    formData,
    setFormData,
    refSubmitButton,
    setIsButtonDisabled,
    setCurrentStep,
    refFormSaveButton
}: FinalizeScreenProps)  => {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        setTimeout(() => {
            // @ts-ignore
            videoRef?.current?.play()
        }, 10)
    }, [])

    return(
        <div className="flex items-center flex-col">

            <video
                ref={videoRef}
                loop
                muted
                className={'absolute top-0 left-0 ring-0 w-full h-screen z-0 object-cover bg-center'}
            >
                <source src={'/video/welcome.MP4'} type={'video/mp4'}/>
            </video>
        </div>
    )
}