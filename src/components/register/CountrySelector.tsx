import Image from "next/image"
import { Combobox } from "../shared/Combobox"
import { PageHeader } from "../shared/PageHeader"
import {Dispatch, RefObject, SetStateAction} from "react";
import {RegisterData} from "@/components/types";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { Form } from "../ui/form"
import { countries } from "@/lib/countries"
interface CountrySelectorProps {
    formData: RegisterData;
    setFormData: Dispatch<SetStateAction<RegisterData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
}

const countryScreenSchema = z.object({
    country: z.string().nonempty('Country is required.'),
})

export const CountrySelector = ({formData, setFormData, refSubmitButton, setCurrentStep}: CountrySelectorProps) => {

    const selectedCountry = countries?.filter((country) => country?.value === formData?.country)

    const form = useForm<z.infer<typeof countryScreenSchema>>({
        resolver: zodResolver(countryScreenSchema),
        defaultValues: {
            country: formData?.country,
        },
    })

    const onSubmit = (values: z.infer<typeof countryScreenSchema>) => {
        console.log(10, values)
        if(values){
            setFormData({...formData, ...values, countryCode: selectedCountry[0]?.phone})
            setCurrentStep('passport')
        }
    }
    return(
        <div>
            <div className="flex items-center flex-col">
                <PageHeader title="Welcome aboard" />
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
            <div className="mb-10 px-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid gap-1">
                            <Combobox
                                options={countries?.map((country) => ({
                                    label: country?.label,
                                    value: country?.value,
                                }))}
                                name={'country'}
                                placeholder={'country'}
                                required={true}
                                label={'select country'}
                            />
                        </div>

                        <button
                            type="submit"
                            ref={refSubmitButton}
                            className="invisible"
                        >
                            submit
                        </button>
                    </form>
                </Form>
            </div>
        </div>
    )
}