'use client'

import {Dispatch, RefObject, SetStateAction, useState} from "react"
import { photographyCategories } from "./categoryData";
import {Form} from "@/components/ui/form";
import {Combobox} from "@/components/shared/Combobox";
import {taskList} from "@/components/tasks/add/taskData";
import {TaskData} from "@/components/types";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {PageHeader} from "@/components/shared/PageHeader";
import Image from "next/image";

interface CategorySelectorProps {
    formData: TaskData;
    setFormData: Dispatch<SetStateAction<TaskData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
    refFormSaveButton: RefObject<HTMLButtonElement> | null;
}

const categoryScreenSchema = z.object({
    categoryId: z.string().nonempty('Category is required.'),
})

export const SelectCategory = ({formData, setFormData, refSubmitButton, setCurrentStep, refFormSaveButton}:CategorySelectorProps) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

    const form = useForm<z.infer<typeof categoryScreenSchema>>({
        resolver: zodResolver(categoryScreenSchema),
        defaultValues: {
            categoryId: formData?.categoryId?.toString(),
        },
    })

    const onSubmit = (values: z.infer<typeof categoryScreenSchema>) => {
        console.log(10, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('upload')
        }
    }
    const handleTaskSelect = (selectedCategoryId: string) => {
        setSelectedCategoryId(selectedCategoryId);
      };

      const singleCategory = photographyCategories.filter((category) => category.id.toString() === selectedCategoryId);

    return(
        <div className="w-full h-full text-center p-4">
            <PageHeader title={`Select your today's category`} />

            <div className="flex items-center justify-center w-full h-full min-h-[500px]">
                <div className={'w-full h-auto flex items-center justify-center'}>
                    <Image
                        src={'/images/logo.svg'}
                        alt={'logo'}
                        width={1920}
                        height={1080}
                        className={'w-96 h-auto'}
                    />
                </div>

                <div className="text-left mt-4 grid w-full px-4">
                    <div className="text-left mt-4 grid">
                        <div className="grid gap-1">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="grid gap-1">
                                        <Combobox
                                            onSelectTask={handleTaskSelect}
                                            options={taskList?.map((task) => ({
                                                label: task?.label,
                                                value: task?.value.toString(),
                                            }))}
                                            name={'categoryId'}
                                            placeholder={'category'}
                                            required={true}
                                            label={'select category'}
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        ref={refFormSaveButton}
                                        className="invisible"
                                        onClick={() => setCurrentStep('task')}
                                    >
                                        submit
                                    </button>

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
                        <div className="grid gap-1">
                            {singleCategory[0] && (
                                <div className="grid gap-1 my-6">
                                    <p className="capitalize text-lg font-semibold">rules: </p>

                                    <div className="flex items-start flex-col">
                                        {singleCategory[0]?.rules.map((rule, index) => (
                                            <ul className="list-disc pl-6" key={index}>
                                                <li className="capitalize text-sm mb-1" key={index}>{rule}</li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}