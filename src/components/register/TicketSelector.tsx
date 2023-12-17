'use client'

import {Dispatch, RefObject, SetStateAction} from "react"
import { PageHeader } from "../shared/PageHeader"
import {RegisterData} from "@/components/types";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface TicketSelectorProps {
    formData: RegisterData;
    setFormData: Dispatch<SetStateAction<RegisterData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>,
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const TicketSelectorSchema = z.object({
    ticketNumber: z.string(),
    flightNumber: z.string(),
    takeOffFrom: z.string(),
    takeOffTime: z.string(),
    landingTo: z.string(),
    landingTime: z.string()
})

export const TicketSelector = ({formData, setFormData, refSubmitButton, refFormSaveButton, setCurrentStep}: TicketSelectorProps) => {
    const form = useForm<z.infer<typeof TicketSelectorSchema>>({
        resolver: zodResolver(TicketSelectorSchema),
        defaultValues: {
            ticketNumber: formData?.ticketNumber,
            flightNumber: formData?.flightNumber,
            takeOffFrom: formData?.takeOffFrom,
            takeOffTime: formData?.takeOffTime,
            landingTo: formData?.landingTo,
            landingTime: formData?.landingTime,
        },
    })
    const onSubmit = (values: z.infer<typeof TicketSelectorSchema>) => {
        console.log(12, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('/')
        }
    }
    
    return(
        <div className="mb-14 mt-4">
            <div className="flex flex-col">
                <PageHeader title="Add ticket details"  image={'/'}/>
            </div>

            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Ticket number'}
                                name={'ticketNumber'}
                                type={'string'}
                                label={'ticket number'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Flight number'}
                                name={'flightNumber'}
                                type={'string'}
                                label={'flight number'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Take off from'}
                                name={'takeOffFrom'}
                                type={'string'}
                                label={'take off from'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Take off time'}
                                name={'takeOffTime'}
                                type={'string'}
                                label={'take off time'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Landing to'}
                                name={'landingTo'}
                                type={'string'}
                                label={'landing to'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Landing time'}
                                name={'landingTime'}
                                type={'string'}
                                label={'landing time'}
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
                            onClick={() => setCurrentStep('payment')}
                        >
                            submit
                        </button>
                    </form>
                </Form>
            </div>
        </div>
    )
}