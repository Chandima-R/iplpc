'use client'

import {Dispatch, RefObject, SetStateAction, useState} from "react"
import { taskList } from "./taskData";
import {Form} from "@/components/ui/form";
import {Combobox} from "@/components/shared/Combobox";
import {TaskData} from "@/components/types";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {PageHeader} from "@/components/shared/PageHeader";
import Image from "next/image";

interface TaskSelectorProps {
    formData: TaskData;
    setFormData: Dispatch<SetStateAction<TaskData>>;
    refSubmitButton: RefObject<HTMLButtonElement> | null;
    setIsButtonDisabled: (data: boolean) => void;
    setCurrentStep: Dispatch<SetStateAction<string>>
}

const taskScreenSchema = z.object({
    taskId: z.string().nonempty('Task is required.'),
})


export const SelectTask = ({formData, setFormData, refSubmitButton, setCurrentStep}:TaskSelectorProps ) => {
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

    const form = useForm<z.infer<typeof taskScreenSchema>>({
        resolver: zodResolver(taskScreenSchema),
        defaultValues: {
            taskId: formData?.taskId?.toString(),
        },
    })

    const onSubmit = (values: z.infer<typeof taskScreenSchema>) => {
        console.log(10, values)
        if(values){
            setFormData({...formData, ...values})
            setCurrentStep('category')
        }
    }

    const handleTaskSelect = (selectedTaskId: string) => {
        setSelectedTaskId(selectedTaskId);
      };

    const taskDetails = taskList.filter((task) => task.id.toString() === selectedTaskId);
    
    return(
        <div className="w-full h-full text-center p-4">
            <PageHeader title={`Select your today's task`}/>

            <div className="flex items-center justify-center w-full h-full min-h-[500px]">
                <div className={'w-full h-auto flex items-center justify-center'}>
                    <Image
                        src={'/images/logo-blue.png'}
                        alt={'logo'}
                        width={1920}
                        height={1080}
                        className={'w-96 h-auto'}
                    />
                </div>

                <div className="text-left mt-4 grid w-full px-4">
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
                                        name={'taskId'}
                                        placeholder={'task'}
                                        required={true}
                                        label={'select task'}
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
                    <div className="grid gap-1 mb-4">
                        {selectedTaskId && (
                            <div className="flex items-center">
                                <p className="capitalize text-lg font-semibold">selected task ID:</p>
                                <p className="ml-4 text-base">{selectedTaskId}</p>
                            </div>
                        )}
                    </div>
                    {taskDetails[0] && (
                        <div className="grid gap-1">
                            <p className="capitalize text-lg font-semibold">Task details: </p>
                            <div className="flex items-start flex-col">
                                {taskDetails[0]?.details?.map((detail) => (
                                        <div className="flex flex-col items-start mb-2 border-b-[1px] border-dashed pb-2" key={detail?.title}>
                                            <p className="capitalize text-base font-semibold mb-1">{detail?.title}</p>
                                            <p className="text-sm">{detail?.description}</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}