'use client'

import {RegisterData, TourData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction} from "react";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface Day15Props {
    formData: TourData;
    setFormData: Dispatch<SetStateAction<TourData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const Day15ScreenSchema = z.object({
    day15Location: z.string().nonempty('Location is required.'),
    day15Hotel: z.string().nonempty('Hotel is required.'),
    day15Activity: z.string().nonempty('Activity is required.'),
})

export const Day15 = ({formData, setFormData, refSubmitButton, setCurrentStep, setIsButtonDisabled, refFormSaveButton}:Day15Props) => {

    const form = useForm<z.infer<typeof Day15ScreenSchema>>({
        resolver: zodResolver(Day15ScreenSchema),
        defaultValues: {
            day15Location: formData?.day15Location,
            day15Hotel: formData?.day15Hotel,
            day15Activity: formData?.day15Activity,
        },
    })
    const onSubmit = (values: z.infer<typeof Day15ScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('day16')
        }
    }

    return (
        <div>
            <h1>Day 15</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Belihuloya'}
                            name={'day15Location'}
                            type={'string'}
                            label={'location'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Citrine Riverside'}
                            name={'day15Hotel'}
                            type={'string'}
                            label={'Hotel'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Nature Trail'}
                            name={'day15Activity'}
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
                        onClick={() => setCurrentStep('day14')}
                    >
                        submit
                    </button>
                </form>
            </Form>
        </div>
    )
}