'use client'

import {RegisterData, TourData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction} from "react";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface Day10Props {
    formData: TourData;
    setFormData: Dispatch<SetStateAction<TourData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const Day10ScreenSchema = z.object({
    day10Location: z.string().nonempty('Location is required.'),
    day10Hotel: z.string().nonempty('Hotel is required.'),
    day10Activity: z.string().nonempty('Activity is required.'),
})

export const Day10 = ({formData, setFormData, refSubmitButton, setCurrentStep, setIsButtonDisabled, refFormSaveButton}:Day10Props) => {

    const form = useForm<z.infer<typeof Day10ScreenSchema>>({
        resolver: zodResolver(Day10ScreenSchema),
        defaultValues: {
            day10Location: formData?.day10Location,
            day10Hotel: formData?.day10Hotel,
            day10Activity: formData?.day10Activity,
        },
    })
    const onSubmit = (values: z.infer<typeof Day10ScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('day11')
        }
    }

    return (
        <div>
            <h1>Day 10</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Belihuloya'}
                            name={'day10Location'}
                            type={'string'}
                            label={'location'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Citrine Riverside'}
                            name={'day10Hotel'}
                            type={'string'}
                            label={'Hotel'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Nature Trail'}
                            name={'day10Activity'}
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
                        onClick={() => setCurrentStep('day09')}
                    >
                        submit
                    </button>
                </form>
            </Form>
        </div>
    )
}