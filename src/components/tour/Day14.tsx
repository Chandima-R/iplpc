'use client'

import {RegisterData, TourData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction} from "react";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface Day14Props {
    formData: TourData;
    setFormData: Dispatch<SetStateAction<TourData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const Day14ScreenSchema = z.object({
    day14Location: z.string().nonempty('Location is required.'),
    day14Hotel: z.string().nonempty('Hotel is required.'),
    day14Activity: z.string().nonempty('Activity is required.'),
})

export const Day14 = ({formData, setFormData, refSubmitButton, setCurrentStep, setIsButtonDisabled, refFormSaveButton}:Day14Props) => {

    const form = useForm<z.infer<typeof Day14ScreenSchema>>({
        resolver: zodResolver(Day14ScreenSchema),
        defaultValues: {
            day14Location: formData?.day14Location,
            day14Hotel: formData?.day14Hotel,
            day14Activity: formData?.day14Activity,
        },
    })
    const onSubmit = (values: z.infer<typeof Day14ScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('day15')
        }
    }

    return (
        <div>
            <h1>Day 14</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Belihuloya'}
                            name={'day14Location'}
                            type={'string'}
                            label={'location'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Citrine Riverside'}
                            name={'day14Hotel'}
                            type={'string'}
                            label={'Hotel'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Nature Trail'}
                            name={'day14Activity'}
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