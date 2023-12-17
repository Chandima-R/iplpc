'use client'

import Image from "next/image"
import {Dispatch, RefObject, SetStateAction} from "react"
import { PageHeader } from "../shared/PageHeader"
import {RegisterData} from "@/components/types";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Form } from "../ui/form"
import {InputField} from "@/components/shared/InputField";

interface PassportSelectorProps {
    formData: RegisterData;
    setFormData: Dispatch<SetStateAction<RegisterData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const passportScreenSchema = z.object({
    passportNumber: z.string().min(8, {
        message: "Passport number must be at least 8 characters.",
    }),
})
export const PassportSelector = ({formData, setFormData, setCurrentStep, refSubmitButton, refFormSaveButton}: PassportSelectorProps) => {

    const form = useForm<z.infer<typeof passportScreenSchema>>({
        resolver: zodResolver(passportScreenSchema),
        defaultValues: {
            passportNumber: formData?.passportNumber,
        },
    })
    const onSubmit = (values: z.infer<typeof passportScreenSchema>) => {
        console.log(12, values)
        if(values){
           setFormData({...formData, ...values})
            setCurrentStep('payment')
        }
    }
    return(
        <div>
            <div className="flex items-center flex-col">
                <PageHeader title="passport details"/>
                <div className="mb-10">
                    <Image
                        src="/images/logo-blue.png"
                        alt="logo"
                        width={400}
                        height={200}
                        className="object-contain h-96"
                        priority={true}
                    />
                </div>
            </div>
            <div className="mb-14">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid gap-1">
                            <InputField
                                placeholder={'passport number'}
                                name={'passportNumber'}
                                type={'string'}
                                label={'passport number'}
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
                            onClick={() => setCurrentStep('country')}
                        >
                            back
                        </button>
                    </form>
                </Form>
            </div>
        </div>
    )
}