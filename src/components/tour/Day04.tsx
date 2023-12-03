'use client'

import {TourData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction} from "react";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface Day04Props {
    formData: TourData;
    setFormData: Dispatch<SetStateAction<TourData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const Day04ScreenSchema = z.object({
    day04Location: z.string().nonempty('Location is required.'),
    day04Hotel: z.string().nonempty('Hotel is required.'),
    day04Activity: z.string().nonempty('Activity is required.'),
})

export const Day04 = ({formData, setFormData, refSubmitButton, setCurrentStep, refFormSaveButton}:Day04Props) => {

    const form = useForm<z.infer<typeof Day04ScreenSchema>>({
        resolver: zodResolver(Day04ScreenSchema),
        defaultValues: {
            day04Location: formData?.day04Location,
            day04Hotel: formData?.day04Hotel,
            day04Activity: formData?.day04Activity,
        },
    })
    const onSubmit = (values: z.infer<typeof Day04ScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('day05')
        }
    }

    return (
        <div>
            <h1>Day 0</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Belihuloya'}
                            name={'day04Location'}
                            type={'string'}
                            label={'location'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Citrine Riverside'}
                            name={'day04Hotel'}
                            type={'string'}
                            label={'Hotel'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Nature Trail'}
                            name={'day04Activity'}
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
                        onClick={() => setCurrentStep('day03')}
                    >
                        submit
                    </button>
                </form>
            </Form>
        </div>
    )
}