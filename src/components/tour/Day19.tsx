'use client'

import {RegisterData, TourData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction} from "react";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface Day19Props {
    formData: TourData;
    setFormData: Dispatch<SetStateAction<TourData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const Day19ScreenSchema = z.object({
    day19Location: z.string().nonempty('Location is required.'),
    day19Hotel: z.string().nonempty('Hotel is required.'),
    day19Activity: z.string().nonempty('Activity is required.'),
})

export const Day19 = ({formData, setFormData, refSubmitButton, setCurrentStep, setIsButtonDisabled, refFormSaveButton}:Day19Props) => {

    const form = useForm<z.infer<typeof Day19ScreenSchema>>({
        resolver: zodResolver(Day19ScreenSchema),
        defaultValues: {
            day19Location: formData?.day19Location,
            day19Hotel: formData?.day19Hotel,
            day19Activity: formData?.day19Activity,
        },
    })
    const onSubmit = (values: z.infer<typeof Day19ScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('day20')
        }
    }

    return (
        <div>
            <h1>Day 19</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Belihuloya'}
                            name={'day19Location'}
                            type={'string'}
                            label={'location'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Citrine Riverside'}
                            name={'day19Hotel'}
                            type={'string'}
                            label={'Hotel'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Nature Trail'}
                            name={'day19Activity'}
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
                        onClick={() => setCurrentStep('day18')}
                    >
                        submit
                    </button>
                </form>
            </Form>
        </div>
    )
}