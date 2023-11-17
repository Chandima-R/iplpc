'use client'

import { useState } from "react"
import { TaskCombobox } from "./TaskSelector"
import { taskList } from "./taskData";

export const SelectTask = () => {
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

    const handleTaskSelect = (selectedTaskId: number) => {
        setSelectedTaskId(selectedTaskId);
      };

      const taskDetails = taskList.filter((task) => task.id === selectedTaskId);
    
    return(
        <div className="w-full h-full text-center p-4">
            <h1 className="text-3xl capitalize font-bold mt-4">Select your today&quot;s task</h1>

            <div className="flex items-center justify-center">
                <form onSubmit={() => {}}>
                    <div className="text-left mt-20 grid gap-4">
                        <div className="grid gap-1">
                            <p className="capitalize text-sm">select task</p>
                            <TaskCombobox onSelectTask={handleTaskSelect}/>
                        </div>
                        <div className="grid gap-1">
                            {selectedTaskId && (
                                <div className="flex items-center">
                                    <p className="capitalize text-sm">selected task ID:</p>
                                    <p className="ml-4 text-sm">{selectedTaskId}</p>
                                </div>
                            )}
                        </div>
                        {taskDetails && (
                            <div className="grid gap-1 my-6">
                                <p className="capitalize text-sm">Task details: </p>
                                <div className="flex items-start flex-col">
                                    {taskDetails[0]?.details?.map((detail) => (
                                        <div className="flex flex-col items-start mb-2" key={detail?.title}>
                                            <p className="capitalize text-sm font-semibold mb-1">{detail?.title}</p>
                                            <p className="text-sm">{detail?.description}</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}