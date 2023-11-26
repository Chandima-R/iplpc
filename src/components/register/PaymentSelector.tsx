'use client'

import {Dispatch, RefObject, SetStateAction} from "react"
import { Combobox } from "../shared/Combobox"
import { PageHeader } from "../shared/PageHeader"
import {RegisterData} from "@/components/types";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import {countries} from "@/lib/countries";

interface PaymentSelectorProps {
    formData: RegisterData;
    setFormData: Dispatch<SetStateAction<RegisterData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const paymentScreenSchema = z.object({
    email: z.string().email('Please enter a valid email address.'),
    cardType: z.string().nonempty('Card type is required.'),
    cardNumber: z.string().min(16, {
        message: "Card number must be at least 16 characters.",
    }).nonempty('Card number is required.'),
    monthYear: z.string().nonempty('Month and year are required.'),
    cvv: z.string().min(3, {}).nonempty('CVV is required.'),
    cardCountry: z.string().nonempty('Country is required.'),
    zipCode: z.string().min(5,{
        message: "Zip code must be at least 5 characters.",
    }).nonempty('Zip code is required.'),
})

export const PaymentSelector = ({formData, setFormData, setCurrentStep, refSubmitButton, refFormSaveButton}:PaymentSelectorProps) => {

    const form = useForm<z.infer<typeof paymentScreenSchema>>({
        resolver: zodResolver(paymentScreenSchema),
        defaultValues: {
            email: formData?.email,
            cardType: formData?.cardType,
            cardNumber: formData?.cardNumber,
            monthYear: formData?.monthYear,
            cvv: formData?.cvv,
            cardCountry: formData?.cardCountry,
            zipCode: formData?.zipCode,
        },
    })
    const onSubmit = (values: z.infer<typeof paymentScreenSchema>) => {
        console.log(14, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('ticket')
        }
    }

    return(
        <div className="mb-4">
            <div className="flex flex-col">
                <PageHeader title="Add you payments" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid gap-1">
                            <InputField
                                placeholder={'someone@example.com'}
                                name={'email'}
                                type={'email'}
                                label={'email'}
                                required={true}
                            />
                        </div>

                        <div className={'grid gap-1'}>
                            <Combobox
                                options={[
                                    { label: 'Visa', value: 'visa' },
                                    { label: 'MasterCard', value: 'mastercard' },
                                    { label: 'American Express', value: 'american-express' },
                                ]}
                                name={'cardType'}
                                placeholder={'card type'}
                                required={true}
                                label={'select card type'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Card number'}
                                name={'cardNumber'}
                                type={'text'}
                                label={'card information'}
                                required={true}
                            />
                        </div>

                        <div className={'grid grid-cols-2 gap-2'}>
                            <div className="grid gap-1">
                                <InputField
                                    placeholder={'MM / YY'}
                                    name={'monthYear'}
                                    type={'text'}
                                />
                            </div>

                            <div className="grid gap-1">
                                <InputField
                                    placeholder={'CVV'}
                                    name={'cvv'}
                                    type={'text'}
                                />
                            </div>
                        </div>

                        <div className="grid gap-1">
                            <Combobox
                                options={countries?.map((country) => ({
                                    label: country?.label,
                                    value: country?.value,
                                }))}
                                name={'cardCountry'}
                                placeholder={'country'}
                                required={true}
                                label={'select country'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Zip code'}
                                name={'zipCode'}
                                type={'text'}
                                label={'zip code'}
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
                            onClick={() => setCurrentStep('passport')}
                        >
                            submit
                        </button>
                    </form>
                </Form>
            </div>
        </div>
    )
}