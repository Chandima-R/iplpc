'use client'

import {TourData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction} from "react";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface Day03Props {
    formData: TourData;
    setFormData: Dispatch<SetStateAction<TourData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const Day03ScreenSchema = z.object({
    day03Location: z.string().nonempty('Location is required.'),
    day03Hotel: z.string().nonempty('Hotel is required.'),
    day03Activity: z.string().nonempty('Activity is required.'),
})

export const Day03 = ({formData, setFormData, refSubmitButton, setCurrentStep, refFormSaveButton}:Day03Props) => {

    const form = useForm<z.infer<typeof Day03ScreenSchema>>({
        resolver: zodResolver(Day03ScreenSchema),
        defaultValues: {
            day03Location: formData?.day03Location,
            day03Hotel: formData?.day03Hotel,
            day03Activity: formData?.day03Activity,
        },
    })
    const onSubmit = (values: z.infer<typeof Day03ScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('day04')
        }
    }

    return (
        <div>
            <h1>Day 03</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Belihuloya'}
                            name={'day03Location'}
                            type={'string'}
                            label={'location'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Citrine Riverside'}
                            name={'day03Hotel'}
                            type={'string'}
                            label={'Hotel'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Nature Trail'}
                            name={'day03Activity'}
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
                        onClick={() => setCurrentStep('day02')}
                    >
                        submit
                    </button>
                </form>
            </Form>
        </div>
    )
}