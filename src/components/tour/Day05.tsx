'use client'

import {TourData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction} from "react";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface Day05Props {
    formData: TourData;
    setFormData: Dispatch<SetStateAction<TourData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const Day05ScreenSchema = z.object({
    day05Location: z.string().nonempty('Location is required.'),
    day05Hotel: z.string().nonempty('Hotel is required.'),
    day05Activity: z.string().nonempty('Activity is required.'),
})

export const Day05 = ({formData, setFormData, refSubmitButton, setCurrentStep, refFormSaveButton}:Day05Props) => {

    const form = useForm<z.infer<typeof Day05ScreenSchema>>({
        resolver: zodResolver(Day05ScreenSchema),
        defaultValues: {
            day05Location: formData?.day05Location,
            day05Hotel: formData?.day05Hotel,
            day05Activity: formData?.day05Activity,
        },
    })
    const onSubmit = (values: z.infer<typeof Day05ScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('day06')
        }
    }

    return (
        <div>
            <h1>Day 05</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Belihuloya'}
                            name={'day05Location'}
                            type={'string'}
                            label={'location'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Citrine Riverside'}
                            name={'day05Hotel'}
                            type={'string'}
                            label={'Hotel'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Nature Trail'}
                            name={'day05Activity'}
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
                        onClick={() => setCurrentStep('day06')}
                    >
                        submit
                    </button>
                </form>
            </Form>
        </div>
    )
}