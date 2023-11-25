"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import {InputField} from "@/components/shared/InputField";
import {MultiLineInputField} from "@/components/shared/MultiLineInputField";
import {useState} from "react";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }).nonempty('Username is required.'),
    phone: z.string().min(2, {
        message: "Phone must be at least 2 characters."}).nonempty('Phone is required.'),
    about: z.string().min(2, {
        message: "Description must be at least 2 characters."}).nonempty('Description is required.'),
})

export default function ProfilePage() {
    const [required, setRequired] = useState(false)
    // ...

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            phone: "",
            about: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <InputField
                    label={'username label'}
                    placeholder={'input box'}
                    name="username"
                    required={true}
                 type={'text'}/>
                <InputField
                    label={'phone label'}
                    placeholder={'input box'}
                    name="phone"
                    required={true}
                 type={'text'}/>
                <MultiLineInputField
                    label={'multiline label'}
                    placeholder={'multiline box'}
                    name="about"
                    required={true}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
