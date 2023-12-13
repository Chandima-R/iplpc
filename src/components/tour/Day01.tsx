'use client'

import {RegisterData, TourData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction} from "react";
import {InputField} from "@/components/shared/InputField";

import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface Day01Props {
    formData: TourData;
    setFormData: Dispatch<SetStateAction<TourData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const Day01ScreenSchema = z.object({
    day01Location: z.string().nonempty('Location is required.'),
    day01Hotel: z.string().nonempty('Hotel is required.'),
    day01Activity: z.string().nonempty('Activity is required.'),
})

export const Day01 = ({formData, setFormData, refSubmitButton, setCurrentStep, setIsButtonDisabled, refFormSaveButton}:Day01Props) => {

    const form = useForm<z.infer<typeof Day01ScreenSchema>>({
        resolver: zodResolver(Day01ScreenSchema),
        defaultValues: {
            day01Location: formData?.day01Location,
            day01Hotel: formData?.day01Hotel,
            day01Activity: formData?.day01Activity,
        },
    })
    const onSubmit = (values: z.infer<typeof Day01ScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('day02')
        }
    }

    return (
        <div>
            <h1>Day 01</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Belihuloya'}
                            name={'day01Location'}
                            type={'string'}
                            label={'location'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Citrine Riverside'}
                            name={'day01Hotel'}
                            type={'string'}
                            label={'Hotel'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Nature Trail'}
                            name={'day01Activity'}
                            type={'string'}
                            label={'activity'}
                            required={true}
                        />
                    </div>

                    <button
                        type="submit"
                        ref={refSubmitButton}
                        className="invisible"
                    >
                        submit
                    </button>

                    <button
                        type="button"
                        ref={refFormSaveButton}
                        className="invisible"
                    >
                        submit
                    </button>
                </form>
            </Form>
        </div>
    )
}