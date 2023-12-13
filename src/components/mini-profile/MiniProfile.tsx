'use client'

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { X} from "lucide-react"
import { Button } from "../ui/button"
import {useState} from "react";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {InputField} from "@/components/shared/InputField";
import { Form } from "../ui/form"

const MiniProfileSchema = z.object({
    name: z.string().nonempty('Name is required.'),
    surname: z.string().nonempty('Surname is required.'),
    email: z.string().email('Email is required.'),
    confirmEmail: z.string().email('Email confirmation is required.'),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password confirmation must be at least 8 characters.",
    }),
}).refine(data => data.email === data.confirmEmail, {
    message: 'Email and confirm email must match.',
}).refine(data => data.password === data.confirmPassword, {
    message: 'Password and confirm password must match.',
});
  export function MiniProfile() {
      const [formData, setFormData] = useState<z.infer<typeof MiniProfileSchema> | null>(null)
      const form = useForm<z.infer<typeof MiniProfileSchema>>({
        resolver: zodResolver(MiniProfileSchema),
        defaultValues: {
            name: formData?.name,
            surname: formData?.surname,
            email: formData?.email,
            confirmEmail: formData?.email,
            password: formData?.password,
            confirmPassword: formData?.password,
        },
    })


      const onSubmit = (values: z.infer<typeof MiniProfileSchema>) => {
          console.log(12, values)
          if(values){
                setFormData({...formData, ...values})
          }
      }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
            <Avatar className={'cursor-pointer'}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </AlertDialogTrigger>
        <AlertDialogContent className={'w-[1000px]'}>
            <div className={'absolute top-4 right-4'}>
                <AlertDialogCancel asChild className={'bg-none border-none p-0 px-2'}>
                    <div>
                        <X className={'cursor-pointer'} />
                    </div>
                </AlertDialogCancel>
            </div>
            <p className={'text-2xl font-bold capitalize'}>Update your profile</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <p className="text-lg font-semibold tracking-wide mb-2">Personal Information</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Name'}
                                name={'name'}
                                type={'string'}
                                label={'Name'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Surname'}
                                name={'surname'}
                                type={'string'}
                                label={'surname'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Email'}
                                name={'email'}
                                type={'email'}
                                label={'email'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Confirmation email'}
                                name={'confirmationEmail'}
                                type={'email'}
                                label={'confirmation email'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Password'}
                                name={'password'}
                                type={'password'}
                                label={'password'}
                            />
                        </div>

                        <div className="grid gap-1">
                            <InputField
                                placeholder={'Confirmation password'}
                                name={'confirmationPassword'}
                                type={'password'}
                                label={'confirmation password'}
                            />
                        </div>

                        <div />

                        <div className={'w-full flex justify-end'}>
                            <Button type={'submit'} className={'bg-primary text-white hover:bg-secondary transition-all ease-in-out duration-300 rounded-full'}>Update Profile</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  