'use client'

import {RegisterData, TourData} from "@/components/types";
import {Dispatch, RefObject, SetStateAction} from "react";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

interface Day20Props {
    formData: TourData;
    setFormData: Dispatch<SetStateAction<TourData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const Day20ScreenSchema = z.object({
    day20Location: z.string().nonempty('Location is required.'),
    day20Hotel: z.string().nonempty('Hotel is required.'),
    day20Activity: z.string().nonempty('Activity is required.'),
})

export const Day20 = ({formData, setFormData, refSubmitButton, setCurrentStep, setIsButtonDisabled, refFormSaveButton}:Day20Props) => {

    const form = useForm<z.infer<typeof Day20ScreenSchema>>({
        resolver: zodResolver(Day20ScreenSchema),
        defaultValues: {
            day20Location: formData?.day20Location,
            day20Hotel: formData?.day20Hotel,
            day20Activity: formData?.day20Activity,
        },
    })
    const onSubmit = (values: z.infer<typeof Day20ScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
        }
    }

    return (
        <div>
            <h1>Day 20</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Belihuloya'}
                            name={'day20Location'}
                            type={'string'}
                            label={'location'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Citrine Riverside'}
                            name={'day20Hotel'}
                            type={'string'}
                            label={'Hotel'}
                            required={true}
                        />
                    </div>

                    <div className="grid gap-1">
                        <InputField
                            placeholder={'Nature Trail'}
                            name={'day20Activity'}
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
                        onClick={() => setCurrentStep('day19')}
                    >
                        submit
                    </button>
                </form>
            </Form>
        </div>
    )
}