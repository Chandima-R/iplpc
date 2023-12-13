'use client'

import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"
import { Icons } from "../shared/Icons"
import Link from "next/link"
import { Aperture } from "lucide-react"
import {InputField} from "@/components/shared/InputField";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { Form } from "../ui/form"
import { useRouter } from "next/navigation"

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address.'),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }).nonempty('Password is required.'),
})
export const AdminLogin = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const randomImage = Math.floor(Math.random() * 10)

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const router = useRouter()
    
    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        try{
            setIsLoading(true)
            console.log(values)
            router.push('/  panel')
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)}
    }

    return(
        <div className="relative h-screen w-full flex items-center justify-center">
            <Image
                src={`/images/session/session-image-${randomImage}.jpg`}
                alt="session-image-0"
                width={1920}
                height={1080}
                className="absolute top-0 left-0 right-0 bottom-0 object-cover h-screen z-0"
            />
            
            <div 
                className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-10"
            />
            <div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="z-20 absolute h-screen top-0 bottom-0 left-0 right-0 flex items-center justify-center mx-4">
                        <div className="grid gap-3 w-[600px] p-16 bg-white rounded shadow">
                            <div className="flex items-center justify-center w-full mb-10">
                                <Aperture className="w-16 h-16 mr-4" />
                                <h1 className="text-4xl font-bold text-center tracking-wider uppercase">
                                    sign in
                                </h1>
                            </div>

                            <div className="grid gap-1">
                                <InputField
                                    placeholder={'name@example.com'}
                                    name={'email'}
                                    type={'email'}
                                />
                            </div>

                            <div className="grid gap-1">
                                <div className="grid gap-1">
                                    <InputField
                                        placeholder={'password'}
                                        name={'password'}
                                        type={'password'}
                                    />
                                </div>
                            </div>

                            <Button disabled={isLoading} className="mt-4">
                                {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Sign In
                            </Button>

                            <div className="text-center text-sm w-full flex items-center justify-center px-10 mt-10">
                                <p className="w-auto">By clicking Sign In, you agree to our
                                    {' '}
                                    <Link href={'/terms'} className="underline hover:text-blue-600">Terms of Service</Link>
                                    {' '}
                                    and
                                    {' '}
                                    <Link href={'/policy'} className="underline hover:text-blue-600">Privacy Policy</Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}