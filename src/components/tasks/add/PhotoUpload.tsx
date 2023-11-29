'use client'

import {Dispatch, RefObject, SetStateAction} from "react";
import {TaskData} from "@/components/types";
import {InputField} from "@/components/shared/InputField";
import {Form} from "@/components/ui/form";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {PageHeader} from "@/components/shared/PageHeader";

interface PhotoUploadProps {
    formData: TaskData;
    setFormData: Dispatch<SetStateAction<TaskData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const photoUploadSchema = z.object({
    photos: z.array(z.string()).refine(data => data.length > 0, {
        message: 'Please upload at least one photo.',
    }),
});

export const PhotoUpload = ({formData, setFormData, setCurrentStep, refSubmitButton, refFormSaveButton}: PhotoUploadProps) => {
    const form = useForm<z.infer<typeof photoUploadSchema>>({
        resolver: zodResolver(photoUploadSchema),
        defaultValues: {
            photos: formData?.photo,
        },
    })
    const onSubmit = (values: z.infer<typeof photoUploadSchema>) => {
        console.log(12, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('payment')
        }
    }

    var currentDate = new Date();

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var meridiem = (hours >= 12) ? 'PM' : 'AM';

    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours === 0) ? 12 : hours;

    day = (day < 10) ? Number('0' + day) : day;
    month = (month < 10) ? Number('0' + month) : month;
    hours = (hours < 10) ? Number('0' + hours) : hours;
    minutes = (minutes < 10) ? Number('0' + minutes) : Number(minutes);
    seconds = (seconds < 10) ? Number('0' + seconds) : seconds;
    seconds = (seconds < 10) ? Number('0' + seconds) : seconds;
    
    var formattedDate = day + '-' + month + '-' + year;
    var formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

    return(
        <div className="w-full h-full text-center p-4">
            <PageHeader title={'upload your photos'} />

            <div className="px-4 mt-10 w-full">
                <div className={'flex items-start w-full justify-between'}>
                    <div>
                        <div className="flex items-center mb-2">
                            <p className="capitalize text-base font-semibold">user ID:</p>
                            <p className="ml-4 text-base">user id</p>
                        </div>

                        <div className="flex items-center mb-2">
                            <p className="capitalize text-base font-semibold">task ID:</p>
                            <p className="ml-4 text-base">{formData?.taskId}</p>
                        </div>

                        <div className="flex items-center mb-2">
                            <p className="capitalize text-base font-semibold">category ID:</p>
                            <p className="ml-4 text-base">{formData?.categoryId}</p>
                        </div>
                    </div>
                   <div>
                       <div className="flex items-center mb-2">
                           <p className="capitalize text-base font-semibold">Date:</p>
                           <p className="ml-4 text-base">{formattedDate}</p>
                       </div>

                       <div className="flex items-center mb-2">
                           <p className="capitalize text-base font-semibold">Time:</p>
                           <p className="ml-4 text-base">{formattedTime}</p>
                       </div>
                   </div>
                </div>

                <div className="text-left">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid gap-1">
                                <InputField
                                    placeholder={'passport number'}
                                    name={'photos'}
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
                                onClick={() => setCurrentStep('category')}
                            >
                                back
                            </button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}