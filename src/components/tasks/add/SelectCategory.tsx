'use client'

import { useState } from "react"
import { photographyCategories } from "./categoryData";
import { CategoryCombobox } from "./CategorySelector";

export const SelectCategory = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

    const handleTaskSelect = (selectedCategoryId: number) => {
        setSelectedCategoryId(selectedCategoryId);
      };

      const singleCategory = photographyCategories.filter((category) => category.id === selectedCategoryId);

      console.log(45, singleCategory)
    
    return(
        <div className="w-full h-full text-center p-4">
            <h1 className="text-3xl capitalize font-bold mt-4">Select your today&rsquo;s category</h1>

            <div className="flex items-center justify-center">
                <form onSubmit={() => {}}>
                    <div className="text-left mt-20 grid gap-4">
                        <div className="grid gap-1">
                            <p className="capitalize text-sm">select category</p>
                            <CategoryCombobox onSelectTask={handleTaskSelect}/>
                        </div>
                        <div className="grid gap-1">
                            {selectedCategoryId && (
                                <div className="flex items-center">
                                    <p className="capitalize text-sm">selected category ID:</p>
                                    <p className="ml-4 text-sm">{selectedCategoryId}</p>
                                </div>
                            )}
                        </div>
                        {singleCategory[0] && (
                            <div className="grid gap-1 my-6">
                            <p className="capitalize text-sm">rules: </p>
                            
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
                </form>
            </div>
        </div>
    )
}